import {Injectable} from '@angular/core';
import type {IKanaPoolBuilder, TrainerSettings} from '../../domain';
import type {KanaItem} from '../../core/data';
import {ALL_KANA} from '../../core/data';

/**
 * Реализация построителя пула kana-элементов.
 * Фильтрует ALL_KANA по выбранным скриптам, категориям и рядам.
 */
@Injectable()
export class DefaultKanaPoolBuilder implements IKanaPoolBuilder {
  buildPool(settings: TrainerSettings): KanaItem[] {
    const { scripts, categories, excludedRows } = settings;

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

      // Проверяем, что ряд не исключён
      const rowEnabled = !excludedRows.includes(item.row);

      return scriptMatch && categoryMatch && rowEnabled;
    });
  }
}

