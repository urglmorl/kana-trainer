import { Provider } from '@angular/core';
import {
  SETTINGS_REPOSITORY,
  KANA_POOL_BUILDER,
  RANDOM_GENERATOR,
  PROMPT_ANSWER_MAPPER,
} from '../../domain/tokens';
import { LocalStorageSettingsRepository } from '../repositories/local-storage-settings.repository';
import { DefaultKanaPoolBuilder } from '../pool/default-kana-pool.builder';
import { BagRandomGenerator } from '../random/bag-random.generator';
import { DefaultPromptAnswerMapper } from '../mappers/default-prompt-answer.mapper';

/**
 * Провайдеры для DI на уровне приложения.
 * Связывает интерфейсы (токены) с конкретными реализациями.
 */
export const appProviders: Provider[] = [
  {
    provide: SETTINGS_REPOSITORY,
    useClass: LocalStorageSettingsRepository,
  },
  {
    provide: KANA_POOL_BUILDER,
    useClass: DefaultKanaPoolBuilder,
  },
  {
    provide: RANDOM_GENERATOR,
    useClass: BagRandomGenerator,
  },
  {
    provide: PROMPT_ANSWER_MAPPER,
    useClass: DefaultPromptAnswerMapper,
  },
];
