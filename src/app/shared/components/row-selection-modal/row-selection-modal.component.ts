import {Component, computed, effect, input, output, signal} from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';
import type {Category, Row, Script} from '../../../domain';
import {CATEGORY_ROWS, getRowsForCategory, type RowMeta} from '../../../core/data';
import {ButtonComponent} from '../../ui';

/**
 * Модальное окно выбора рядов для категории.
 */
@Component({
  selector: 'app-row-selection-modal',
  standalone: true,
  imports: [TranslocoPipe, ButtonComponent],
  template: `
    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      (click)="onBackdropClick($event)"
    >
      <!-- Modal -->
      <div
        class="relative mx-4 w-full max-w-md rounded-2xl bg-white shadow-2xl dark:bg-gray-800 animate-slide-up"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {{ 'settings.customizeTitle' | transloco: { category: ('settings.categoryOptions.' + categoryKey() | transloco) } }}
          </h2>
          <button
            type="button"
            (click)="onCancel()"
            class="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="max-h-[60vh] overflow-y-auto px-6 py-4">
          <!-- Row Toggles -->
          <div class="space-y-2">
            @for (rowMeta of rows(); track rowMeta.id) {
              <button
                type="button"
                (click)="toggleRow(rowMeta.id)"
                class="flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all"
                [class]="isRowEnabled(rowMeta.id)
                  ? canDisableRow(rowMeta.id)
                    ? 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50'
                    : 'bg-emerald-50 dark:bg-emerald-950/30 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800'"
              >
                <!-- Checkbox indicator -->
                <div
                  class="flex h-5 w-5 items-center justify-center rounded border-2 transition-colors"
                  [class]="isRowEnabled(rowMeta.id)
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800'"
                >
                  @if (isRowEnabled(rowMeta.id)) {
                    <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  }
                </div>

                <!-- Row label -->
                <span
                  class="text-sm font-medium transition-colors"
                  [class]="isRowEnabled(rowMeta.id)
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-400 dark:text-gray-500'"
                >
                  {{ rowMeta.labelKey | transloco }}
                </span>

                <!-- Lock icon for last row -->
                @if (isRowEnabled(rowMeta.id) && !canDisableRow(rowMeta.id)) {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                }

                <!-- Kana preview -->
                <span
                  class="ml-auto text-lg transition-colors"
                  [class]="isRowEnabled(rowMeta.id)
                    ? 'text-gray-600 dark:text-gray-400'
                    : 'text-gray-300 dark:text-gray-600'"
                >
                  {{ getDisplayKana(rowMeta) }}
                </span>
              </button>
            }
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-700">
          <button
            type="button"
            (click)="onReset()"
            class="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {{ 'settings.reset' | transloco }}
          </button>

          <div class="flex gap-3">
            <ui-button variant="secondary" size="sm" (click)="onCancel()">
              {{ 'settings.cancel' | transloco }}
            </ui-button>
            <ui-button size="sm" (click)="onSave()">
              {{ 'settings.save' | transloco }}
            </ui-button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slide-up {
      from { 
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .animate-fade-in {
      animation: fade-in 0.15s ease-out;
    }
    .animate-slide-up {
      animation: slide-up 0.2s ease-out;
    }
  `],
})
export class RowSelectionModalComponent {
  /** Категория для настройки */
  readonly category = input.required<Category>();

  /** Текущие исключённые ряды */
  readonly currentExcludedRows = input.required<Row[]>();

  /** Выбранные скрипты (для отображения кана) */
  readonly selectedScripts = input.required<Script[]>();

  /** Событие сохранения с новыми исключёнными рядами */
  readonly save = output<Row[]>();

  /** Событие отмены */
  readonly cancel = output<void>();

  /** Локальное состояние исключённых рядов */
  private readonly localExcludedRows = signal<Row[]>([]);

  /** Флаг первой инициализации */
  private hasInitialized = false;

  constructor() {
    // Инициализируем локальное состояние при первом получении входных данных
    effect(() => {
      const excluded = this.currentExcludedRows();
      if (!this.hasInitialized) {
        this.localExcludedRows.set([...excluded]);
        this.hasInitialized = true;
      }
    });
  }

  /** Ряды для текущей категории */
  readonly rows = computed((): RowMeta[] => {
    return CATEGORY_ROWS[this.category()];
  });

  /** Ключ категории для переводов */
  readonly categoryKey = computed(() => {
    const keyMap: Record<Category, string> = {
      'basic': 'basic',
      'dakuten': 'dakuten',
      'handakuten': 'handakuten',
      'yoon': 'yoon',
      'small-vowels': 'smallVowels',
      'extended-katakana': 'extendedKatakana',
    };
    return keyMap[this.category()];
  });

  /** Общее количество рядов */
  readonly totalCount = computed(() => this.rows().length);

  /** Количество включённых рядов */
  readonly enabledCount = computed(() => {
    const excluded = this.localExcludedRows();
    return this.rows().filter((r) => !excluded.includes(r.id)).length;
  });

  /** Все ряды выбраны */
  readonly allSelected = computed(() => this.enabledCount() === this.totalCount());

  /** Некоторые ряды выбраны (не все и не ноль) */
  readonly someSelected = computed(() => {
    const enabled = this.enabledCount();
    return enabled > 0 && enabled < this.totalCount();
  });

  /** Только один ряд включён (нельзя отключить последний) */
  readonly isLastRowEnabled = computed(() => this.enabledCount() === 1);

  /**
   * Проверяет, включён ли ряд.
   */
  isRowEnabled(row: Row): boolean {
    return !this.localExcludedRows().includes(row);
  }

  /**
   * Проверяет, можно ли отключить ряд (нельзя отключить последний).
   */
  canDisableRow(row: Row): boolean {
    // Если ряд уже отключён или это не последний включённый, можно переключить
    if (!this.isRowEnabled(row)) {
      return true; // Ряд уже отключён, можно включить
    }
    return !this.isLastRowEnabled(); // Нельзя отключить последний
  }

  /**
   * Переключает ряд.
   */
  toggleRow(row: Row): void {
    const current = this.localExcludedRows();
    if (current.includes(row)) {
      // Включаем ряд (убираем из исключённых)
      this.localExcludedRows.set(current.filter((r) => r !== row));
    } else {
      // Отключаем ряд (добавляем в исключённые) - только если это не последний
      if (!this.isLastRowEnabled()) {
        this.localExcludedRows.set([...current, row]);
      }
    }
  }

  /**
   * Сбрасывает к значениям по умолчанию (все включены).
   */
  onReset(): void {
    this.localExcludedRows.set([]);
  }

  /**
   * Сохраняет изменения.
   */
  onSave(): void {
    this.save.emit([...this.localExcludedRows()]);
  }

  /**
   * Отменяет изменения.
   */
  onCancel(): void {
    this.cancel.emit();
  }

  /**
   * Обработка клика на backdrop.
   */
  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }

  /**
   * Получает отображаемую кану для ряда.
   */
  getDisplayKana(rowMeta: RowMeta): string {
    const scripts = this.selectedScripts();
    // Приоритет: hiragana если выбрана, иначе katakana
    if (scripts.includes('hiragana') && rowMeta.displayKana.hiragana) {
      return rowMeta.displayKana.hiragana;
    }
    if (scripts.includes('katakana') && rowMeta.displayKana.katakana) {
      return rowMeta.displayKana.katakana;
    }
    // Fallback: любая доступная кана
    return rowMeta.displayKana.hiragana ?? rowMeta.displayKana.katakana ?? '';
  }
}


