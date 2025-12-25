import {computed, effect, inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';
export type EffectiveTheme = 'light' | 'dark';

const STORAGE_KEY = 'kana-trainer-theme';

/**
 * Сервис управления темой приложения.
 * Поддерживает системную тему, ручное переключение и сохранение в localStorage.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /** Текущая выбранная тема (light | dark | system) */
  readonly theme = signal<Theme>(this.loadTheme());

  /** Фактическая тема с учётом системных настроек */
  readonly effectiveTheme = computed<EffectiveTheme>(() => {
    const current = this.theme();
    if (current === 'system') {
      return this.getSystemTheme();
    }
    return current;
  });

  private mediaQuery: MediaQueryList | null = null;

  constructor() {
    if (this.isBrowser) {
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQuery.addEventListener('change', () => {
        // Перерасчёт effectiveTheme при изменении системной темы
        if (this.theme() === 'system') {
          this.applyTheme(this.getSystemTheme());
        }
      });
    }

    // Применяем тему при инициализации и при изменении
    effect(() => {
      this.applyTheme(this.effectiveTheme());
    });
  }

  /**
   * Устанавливает тему и сохраняет в localStorage.
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }

  /**
   * Циклически переключает тему: system → light → dark → system.
   */
  toggleTheme(): void {
    const current = this.theme();
    const next: Theme =
      current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system';
    this.setTheme(next);
  }

  private loadTheme(): Theme {
    if (!this.isBrowser) {
      return 'system';
    }
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored && ['light', 'dark', 'system'].includes(stored)
      ? stored
      : 'system';
  }

  private getSystemTheme(): EffectiveTheme {
    if (!this.isBrowser || !this.mediaQuery) {
      return 'light';
    }
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  private applyTheme(theme: EffectiveTheme): void {
    if (!this.isBrowser) {
      return;
    }
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}

