import {Component} from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {ThemeToggleComponent} from '../theme-toggle/theme-toggle.component';

/**
 * Хедер приложения с переключателями языка и темы.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoPipe, LanguageSwitcherComponent, ThemeToggleComponent],
  template: `
    <header
      class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80"
    >
      <div class="container mx-auto flex h-14 items-center justify-between px-4">
        <h1 class="text-lg font-bold text-gray-900 dark:text-gray-100">
          {{ 'app.title' | transloco }}
        </h1>
        <div class="flex items-center gap-2">
          <app-language-switcher />
          <app-theme-toggle />
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}

