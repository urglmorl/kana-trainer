import type {KanaItem} from '../../core/data';
import type {TrainerSettings} from '../models/trainer-settings';

/**
 * Результат маппинга: что показывать как вопрос и ответ.
 */
export interface PromptAnswer {
  /** Текст вопроса (то, что видит пользователь изначально) */
  prompt: string;
  /** Текст ответа (то, что показывается после "Reveal") */
  answer: string;
}

/**
 * Порт для преобразования KanaItem в пару prompt/answer.
 */
export interface IPromptAnswerMapper {
  /**
   * Преобразует элемент в prompt/answer в зависимости от режима.
   * @param item - Элемент для преобразования.
   * @param settings - Текущие настройки (определяют режим).
   * @returns Объект с prompt и answer.
   */
  map(item: KanaItem, settings: TrainerSettings): PromptAnswer;
}

