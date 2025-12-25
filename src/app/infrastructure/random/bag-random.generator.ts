import { Injectable } from '@angular/core';
import type { IRandomGenerator } from '../../domain/ports/random-generator';

/**
 * Реализация генератора случайных элементов с алгоритмом "мешок" (bag).
 * 
 * Алгоритм:
 * 1. Перемешиваем пул и извлекаем элементы по одному.
 * 2. Когда мешок пуст — перемешиваем снова.
 * 3. Гарантируем отсутствие повторений подряд.
 */
@Injectable()
export class BagRandomGenerator<T> implements IRandomGenerator<T> {
  private pool: readonly T[] = [];
  private bag: T[] = [];
  private lastItem: T | null = null;

  init(pool: readonly T[]): void {
    if (pool.length === 0) {
      throw new Error('Pool cannot be empty');
    }
    this.pool = pool;
    this.bag = [];
    this.lastItem = null;
    this.refillBag();
  }

  next(): T {
    if (!this.isInitialized()) {
      throw new Error('Generator not initialized. Call init() first.');
    }

    if (this.bag.length === 0) {
      this.refillBag();
    }

    let item = this.bag.pop()!;

    // Избегаем повторения подряд (если возможно)
    if (item === this.lastItem && this.pool.length > 1) {
      if (this.bag.length > 0) {
        // Берём следующий элемент и возвращаем текущий в конец
        const nextItem = this.bag.pop()!;
        this.bag.unshift(item);
        item = nextItem;
      } else {
        // Перезаполняем мешок и пытаемся снова
        this.refillBag();
        item = this.bag.pop()!;
        if (item === this.lastItem && this.bag.length > 0) {
          const nextItem = this.bag.pop()!;
          this.bag.unshift(item);
          item = nextItem;
        }
      }
    }

    this.lastItem = item;
    return item;
  }

  isInitialized(): boolean {
    return this.pool.length > 0;
  }

  private refillBag(): void {
    this.bag = this.shuffle([...this.pool]);
  }

  /**
   * Fisher-Yates shuffle.
   */
  private shuffle(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

