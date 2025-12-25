import {computed, inject, Injectable, signal} from '@angular/core';
import type {PromptAnswer, TrainerSettings} from '../../domain';
import {KANA_POOL_BUILDER, PROMPT_ANSWER_MAPPER, RANDOM_GENERATOR,} from '../../domain';
import type {KanaItem} from '../../core/data';

/**
 * Состояние тренировочной сессии.
 */
export type SessionState = 'idle' | 'question' | 'answer';

/**
 * Сервис управления тренировочной сессией.
 * Отвечает за генерацию элементов и управление состоянием вопрос/ответ.
 */
@Injectable({ providedIn: 'root' })
export class TrainerSessionService {
  private readonly poolBuilder = inject(KANA_POOL_BUILDER);
  private readonly randomGenerator = inject(RANDOM_GENERATOR);
  private readonly promptAnswerMapper = inject(PROMPT_ANSWER_MAPPER);

  /** Текущие настройки сессии */
  private currentSettings: TrainerSettings | null = null;

  /** Текущий элемент */
  readonly currentItem = signal<KanaItem | null>(null);

  /** Состояние сессии */
  readonly state = signal<SessionState>('idle');

  /** Счётчик показанных элементов */
  readonly itemCount = signal(0);

  /** Размер пула */
  readonly poolSize = signal(0);

  /** Показан ли ответ */
  readonly isAnswerRevealed = computed(() => this.state() === 'answer');

  /** Активна ли сессия */
  readonly isActive = computed(() => this.state() !== 'idle');

  /** Текущий prompt/answer */
  readonly currentPromptAnswer = computed<PromptAnswer | null>(() => {
    const item = this.currentItem();
    if (!item || !this.currentSettings) {
      return null;
    }
    return this.promptAnswerMapper.map(item, this.currentSettings);
  });

  /**
   * Запускает новую сессию с указанными настройками.
   */
  start(settings: TrainerSettings): void {
    const pool = this.poolBuilder.buildPool(settings);

    if (pool.length === 0) {
      console.warn('Empty pool, cannot start session');
      return;
    }

    this.currentSettings = settings;
    this.randomGenerator.init(pool);
    this.poolSize.set(pool.length);
    this.itemCount.set(0);

    this.nextItem();
  }

  /**
   * Показывает ответ для текущего элемента.
   */
  reveal(): void {
    if (this.state() === 'question') {
      this.state.set('answer');
    }
  }

  /**
   * Переходит к следующему элементу.
   */
  nextItem(): void {
    if (!this.randomGenerator.isInitialized()) {
      console.warn('Session not started');
      return;
    }

    const item = this.randomGenerator.next();
    this.currentItem.set(item);
    this.itemCount.update((c) => c + 1);
    this.state.set('question');
  }

  /**
   * Завершает сессию.
   */
  stop(): void {
    this.currentItem.set(null);
    this.state.set('idle');
    this.itemCount.set(0);
    this.poolSize.set(0);
    this.currentSettings = null;
  }

  /**
   * Обрабатывает действие (reveal или next в зависимости от состояния).
   * Удобно для хоткеев.
   */
  handleAction(): void {
    if (this.state() === 'question') {
      this.reveal();
    } else if (this.state() === 'answer') {
      this.nextItem();
    }
  }
}

