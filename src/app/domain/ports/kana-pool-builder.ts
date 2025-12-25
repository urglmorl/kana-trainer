import type { KanaItem } from '../../core/data/kana.types';
import type { TrainerSettings } from '../models/trainer-settings';

/**
 * Порт для построения пула kana-элементов на основе настроек.
 */
export interface IKanaPoolBuilder {
  /**
   * Строит отфильтрованный пул элементов.
   * @param settings - Текущие настройки тренажёра.
   * @returns Массив элементов, соответствующих выбранным скриптам и категориям.
   */
  buildPool(settings: TrainerSettings): KanaItem[];
}

