import {Provider} from '@angular/core';
import {KANA_POOL_BUILDER, PROMPT_ANSWER_MAPPER, RANDOM_GENERATOR, SETTINGS_REPOSITORY,} from '../../domain';
import {LocalStorageSettingsRepository} from '../repositories/local-storage-settings.repository';
import {DefaultKanaPoolBuilder} from '../pool/default-kana-pool.builder';
import {BagRandomGenerator} from '../random/bag-random.generator';
import {DefaultPromptAnswerMapper} from '../mappers/default-prompt-answer.mapper';

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
