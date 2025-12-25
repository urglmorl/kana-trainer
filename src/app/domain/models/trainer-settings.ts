import type {Category, Script} from '../../core/data/kana.types';

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
  requireRevealBeforeNext: true,
};

// Реэкспорт типов для удобства
export type { Script, Category } from '../../core/data/kana.types';

