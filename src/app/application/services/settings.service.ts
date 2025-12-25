import { Injectable, inject, signal, computed } from '@angular/core';
import { SETTINGS_REPOSITORY, KANA_POOL_BUILDER } from '../../domain/tokens';
import {
  TrainerSettings,
  DEFAULT_SETTINGS,
  Script,
  Category,
  TrainerMode,
} from '../../domain/models/trainer-settings';

/**
 * Сервис управления настройками тренажёра.
 * Предоставляет реактивное состояние через сигналы и методы для изменения настроек.
 */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly repository = inject(SETTINGS_REPOSITORY);
  private readonly poolBuilder = inject(KANA_POOL_BUILDER);

  /** Текущие настройки */
  readonly settings = signal<TrainerSettings>(this.loadInitialSettings());

  /** Размер пула для текущих настроек */
  readonly poolSize = computed(() => {
    const s = this.settings();
    if (s.scripts.length === 0 || s.categories.length === 0) {
      return 0;
    }
    return this.poolBuilder.buildPool(s).length;
  });

  /** Есть ли выбор (хотя бы один скрипт и одна категория) */
  readonly hasSelection = computed(() => {
    const s = this.settings();
    return s.scripts.length > 0 && s.categories.length > 0;
  });

  /** Валидны ли текущие настройки (есть выбор И пул не пустой) */
  readonly isValid = computed(() => {
    return this.hasSelection() && this.poolSize() > 0;
  });

  /** Причина невалидности настроек */
  readonly invalidReason = computed<'none' | 'no-selection' | 'empty-pool'>(() => {
    if (this.isValid()) {
      return 'none';
    }
    if (!this.hasSelection()) {
      return 'no-selection';
    }
    return 'empty-pool';
  });

  /** Выбранный режим */
  readonly mode = computed(() => this.settings().mode);

  /** Выбранные скрипты */
  readonly scripts = computed(() => this.settings().scripts);

  /** Выбранные категории */
  readonly categories = computed(() => this.settings().categories);

  private loadInitialSettings(): TrainerSettings {
    const stored = this.repository.load();
    return stored ?? DEFAULT_SETTINGS;
  }

  /**
   * Устанавливает режим тренировки.
   */
  setMode(mode: TrainerMode): void {
    this.updateSettings({ mode });
  }

  /**
   * Переключает скрипт (добавляет/удаляет из выбора).
   */
  toggleScript(script: Script): void {
    const current = this.settings().scripts;
    const updated = current.includes(script)
      ? current.filter((s) => s !== script)
      : [...current, script];
    this.updateSettings({ scripts: updated });
  }

  /**
   * Переключает категорию (добавляет/удаляет из выбора).
   */
  toggleCategory(category: Category): void {
    const current = this.settings().categories;
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    this.updateSettings({ categories: updated });
  }

  /**
   * Проверяет, выбран ли скрипт.
   */
  isScriptSelected(script: Script): boolean {
    return this.settings().scripts.includes(script);
  }

  /**
   * Проверяет, выбрана ли категория.
   */
  isCategorySelected(category: Category): boolean {
    return this.settings().categories.includes(category);
  }

  /**
   * Сбрасывает настройки к значениям по умолчанию.
   */
  reset(): void {
    this.settings.set(DEFAULT_SETTINGS);
    this.repository.save(DEFAULT_SETTINGS);
  }

  private updateSettings(partial: Partial<TrainerSettings>): void {
    const updated = { ...this.settings(), ...partial };
    this.settings.set(updated);
    this.repository.save(updated);
  }
}

