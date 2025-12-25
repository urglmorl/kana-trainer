import {TrainerSettings} from '../models/trainer-settings';

/**
 * Порт для сохранения и загрузки настроек тренажёра.
 */
export interface ISettingsRepository {
  /**
   * Загружает сохранённые настройки.
   * @returns Настройки или null, если ничего не сохранено.
   */
  load(): TrainerSettings | null;

  /**
   * Сохраняет настройки.
   * @param settings - Настройки для сохранения.
   */
  save(settings: TrainerSettings): void;
}

