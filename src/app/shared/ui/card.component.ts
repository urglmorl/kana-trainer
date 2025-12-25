import {Component, computed, input} from '@angular/core';
import {cn} from './utils';

/**
 * Компонент карточки для группировки контента.
 */
@Component({
  selector: 'ui-card',
  standalone: true,
  template: `
    <div [class]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardComponent {
  readonly class = input('');

  protected readonly computedClass = computed(() =>
    cn(
      'rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900',
      this.class()
    )
  );
}

/**
 * Заголовок карточки.
 */
@Component({
  selector: 'ui-card-header',
  standalone: true,
  template: `
    <div [class]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardHeaderComponent {
  readonly class = input('');

  protected readonly computedClass = computed(() =>
    cn('mb-4', this.class())
  );
}

/**
 * Заголовок внутри карточки.
 */
@Component({
  selector: 'ui-card-title',
  standalone: true,
  template: `
    <h3 [class]="computedClass()">
      <ng-content />
    </h3>
  `,
})
export class CardTitleComponent {
  readonly class = input('');

  protected readonly computedClass = computed(() =>
    cn('text-lg font-semibold text-gray-900 dark:text-gray-100', this.class())
  );
}

/**
 * Контент карточки.
 */
@Component({
  selector: 'ui-card-content',
  standalone: true,
  template: `
    <div [class]="computedClass()">
      <ng-content />
    </div>
  `,
})
export class CardContentComponent {
  readonly class = input('');

  protected readonly computedClass = computed(() =>
    cn('', this.class())
  );
}

