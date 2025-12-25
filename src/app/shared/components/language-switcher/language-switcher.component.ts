import { Component, inject, signal } from '@angular/core';
import { TranslocoService, TranslocoPipe } from '@jsverse/transloco';

const STORAGE_KEY = 'kana-trainer-lang';

/**
 * Компонент переключения языка интерфейса.
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslocoPipe],
  template: `
    <div class="relative">
      <button
        type="button"
        class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
        (click)="toggleDropdown()"
      >
        <span class="uppercase">{{ currentLang() }}</span>
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      @if (isOpen()) {
        <div
          class="absolute right-0 top-full mt-1 w-32 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          @for (lang of availableLangs; track lang) {
            <button
              type="button"
              class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              [class.font-semibold]="lang === currentLang()"
              [class.text-gray-900]="lang === currentLang()"
              [class.dark:text-gray-100]="lang === currentLang()"
              [class.text-gray-600]="lang !== currentLang()"
              [class.dark:text-gray-400]="lang !== currentLang()"
              (click)="selectLang(lang)"
            >
              {{ 'language.' + lang | transloco }}
            </button>
          }
        </div>
      }
    </div>
  `,
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class LanguageSwitcherComponent {
  private readonly transloco = inject(TranslocoService);

  readonly availableLangs = ['en', 'ru', 'no'];
  readonly currentLang = signal(this.transloco.getActiveLang());
  readonly isOpen = signal(false);

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && this.availableLangs.includes(stored)) {
      this.transloco.setActiveLang(stored);
      this.currentLang.set(stored);
    }
  }

  toggleDropdown(): void {
    this.isOpen.update((v) => !v);
  }

  selectLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.isOpen.set(false);
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-language-switcher')) {
      this.isOpen.set(false);
    }
  }
}

