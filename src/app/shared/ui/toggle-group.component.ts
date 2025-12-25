import {Component, computed, forwardRef, input, model,} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {cn} from './utils';

/**
 * Компонент группы переключателей (toggle group).
 */
@Component({
  selector: 'ui-toggle-group',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleGroupComponent),
      multi: true,
    },
  ],
  template: `
    <div [class]="containerClass()" role="radiogroup">
      <ng-content />
    </div>
  `,
})
export class ToggleGroupComponent implements ControlValueAccessor {
  readonly class = input('');
  readonly value = model<unknown>(null);

  private onChange: (value: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly containerClass = computed(() =>
    cn(
      'inline-flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800',
      this.class()
    )
  );

  selectValue(newValue: unknown): void {
    this.value.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

/**
 * Элемент группы переключателей.
 */
@Component({
  selector: 'ui-toggle-item',
  standalone: true,
  template: `
    <button
      type="button"
      role="radio"
      [attr.aria-checked]="isSelected()"
      [class]="buttonClass()"
      (click)="onClick()"
    >
      <ng-content />
    </button>
  `,
})
export class ToggleItemComponent {
  readonly value = input.required<unknown>();
  readonly class = input('');
  readonly parentGroup = input.required<ToggleGroupComponent>();

  protected readonly isSelected = computed(
    () => this.parentGroup().value() === this.value()
  );

  protected readonly buttonClass = computed(() =>
    cn(
      'px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer',
      this.isSelected()
        ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100'
        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
      this.class()
    )
  );

  onClick(): void {
    this.parentGroup().selectValue(this.value());
  }
}
