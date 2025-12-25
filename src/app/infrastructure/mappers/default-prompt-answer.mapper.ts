import {Injectable} from '@angular/core';
import type {IPromptAnswerMapper, PromptAnswer, TrainerSettings} from '../../domain';
import type {KanaItem} from '../../core/data';

/**
 * Реализация маппера prompt/answer.
 * Определяет, что показывать как вопрос и ответ в зависимости от режима.
 */
@Injectable()
export class DefaultPromptAnswerMapper implements IPromptAnswerMapper {
  map(item: KanaItem, settings: TrainerSettings): PromptAnswer {
    if (settings.mode === 'romaji-to-kana') {
      return {
        prompt: item.romaji,
        answer: item.kana,
      };
    } else {
      return {
        prompt: item.kana,
        answer: item.romaji,
      };
    }
  }
}

