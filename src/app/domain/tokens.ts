import {InjectionToken} from '@angular/core';
import type {ISettingsRepository} from './ports/settings-repository';
import type {IKanaPoolBuilder} from './ports/kana-pool-builder';
import type {IRandomGenerator} from './ports/random-generator';
import type {IPromptAnswerMapper} from './ports/prompt-answer-mapper';
import type {KanaItem} from '../core/data';

/**
 * Токен для инъекции репозитория настроек.
 */
export const SETTINGS_REPOSITORY = new InjectionToken<ISettingsRepository>(
  'SETTINGS_REPOSITORY'
);

/**
 * Токен для инъекции построителя пула kana-элементов.
 */
export const KANA_POOL_BUILDER = new InjectionToken<IKanaPoolBuilder>(
  'KANA_POOL_BUILDER'
);

/**
 * Токен для инъекции генератора случайных элементов.
 */
export const RANDOM_GENERATOR = new InjectionToken<IRandomGenerator<KanaItem>>(
  'RANDOM_GENERATOR'
);

/**
 * Токен для инъекции маппера prompt/answer.
 */
export const PROMPT_ANSWER_MAPPER = new InjectionToken<IPromptAnswerMapper>(
  'PROMPT_ANSWER_MAPPER'
);

