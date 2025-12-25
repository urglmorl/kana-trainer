import { Injectable } from '@angular/core';
import type { IKanaPoolBuilder } from '../../domain/ports/kana-pool-builder';
import type { TrainerSettings } from '../../domain/models/trainer-settings';
import type { KanaItem } from '../../core/data/kana.types';
import { ALL_KANA } from '../../core/data';

/**
 * Реализация построителя пула kana-элементов.
 * Фильтрует ALL_KANA по выбранным скриптам и категориям.
 */
@Injectable()
export class DefaultKanaPoolBuilder implements IKanaPoolBuilder {
  buildPool(settings: TrainerSettings): KanaItem[] {
    const { scripts, categories } = settings;

    if (scripts.length === 0 || categories.length === 0) {
      return [];
    }

    return ALL_KANA.filter((item) => {
      // Проверяем, что скрипт элемента входит в выбранные
      const scriptMatch = scripts.includes(item.script);
      
      // Проверяем, что хотя бы одна категория элемента входит в выбранные
      const categoryMatch = item.categories.some((cat) =>
        categories.includes(cat)
      );

      return scriptMatch && categoryMatch;
    });
  }
}

