import type {Category, Row, Script} from '../../core/data/kana.types';

/**
 * Режим тренировки.
 */
export type TrainerMode = 'romaji-to-kana' | 'kana-to-romaji';

/**
 * Настройки тренажёра.
 */
export interface TrainerSettings {
  /** Режим: показывать romaji или kana в качестве вопроса */
  mode: TrainerMode;
  /** Выбранные письменности (hiragana / katakana) */
  scripts: Script[];
  /** Выбранные категории */
  categories: Category[];
  /** Исключённые ряды (инвертированная логика: пустой массив = все ряды включены) */
  excludedRows: Row[];
  /** Требовать нажатие "Показать" перед "Далее" */
  requireRevealBeforeNext: boolean;
}

/**
 * Настройки по умолчанию.
 */
export const DEFAULT_SETTINGS: TrainerSettings = {
  mode: 'romaji-to-kana',
  scripts: ['hiragana'],
  categories: ['basic'],
  excludedRows: [],
  requireRevealBeforeNext: true,
};

// Реэкспорт типов для удобства
export type { Script, Category, Row } from '../../core/data/kana.types';

