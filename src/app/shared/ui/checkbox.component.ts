import {Component, computed, forwardRef, input, model,} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {cn} from './utils';

/**
 * Компонент чекбокса с поддержкой реактивных форм.
 */
@Component({
  selector: 'ui-checkbox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  template: `
    <label [class]="containerClass()">
      <input
        type="checkbox"
        [checked]="checked()"
        [disabled]="disabled()"
        (change)="onCheckChange($event)"
        class="peer sr-only"
      />
      <div
        [class]="checkboxClass()"
      >
        @if (checked()) {
          <svg
            class="h-3.5 w-3.5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        }
      </div>
      @if (label()) {
        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
          {{ label() }}
        </span>
      }
      <ng-content />
    </label>
  `,
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly disabled = input(false);
  readonly class = input('');

  readonly checked = model(false);

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly containerClass = computed(() =>
    cn(
      'inline-flex items-center gap-2 cursor-pointer select-none',
      this.disabled() && 'cursor-not-allowed opacity-50',
      this.class()
    )
  );

  protected readonly checkboxClass = computed(() =>
    cn(
      'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
      this.checked()
        ? 'border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900'
        : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800',
      'peer-focus-visible:ring-2 peer-focus-visible:ring-gray-900 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-gray-100'
    )
  );

  onCheckChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checked.set(target.checked);
    this.onChange(target.checked);
    this.onTouched();
  }

  writeValue(value: boolean): void {
    this.checked.set(value ?? false);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handled via input
  }
}

