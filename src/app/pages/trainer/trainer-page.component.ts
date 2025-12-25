import { Component, inject, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { TrainerSessionService } from '../../application/services/trainer-session.service';
import { SettingsService } from '../../application/services/settings.service';
import { ButtonComponent } from '../../shared/ui';

/**
 * Страница тренировки.
 */
@Component({
  selector: 'app-trainer-page',
  standalone: true,
  imports: [TranslocoPipe, ButtonComponent],
  template: `
    @if (session.isActive()) {
      <!-- Top Bar: Back Button + Item Counter -->
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <button
            type="button"
            (click)="goBack()"
            class="mt-2 flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            <span class="hidden sm:inline">{{ 'trainer.back' | transloco }}</span>
            <span class="text-xs opacity-60 hidden sm:inline">[Esc]</span>
          </button>

          <!-- Item Counter -->
          <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {{ 'trainer.itemCount' | transloco: { count: session.itemCount() } }}
            <span class="text-gray-400 dark:text-gray-500">/ {{ session.poolSize() }}</span>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 pb-32">

        <!-- Prompt -->
        <div
          class="mb-8 text-center"
          [class.animate-fade-in]="!session.isAnswerRevealed()"
        >
          <p
            class="text-8xl font-bold text-gray-900 dark:text-gray-100 sm:text-9xl"
            [class.font-japanese]="isKanaPrompt()"
          >
            {{ session.currentPromptAnswer()?.prompt }}
          </p>
        </div>

        <!-- Answer (revealed) -->
        @if (session.isAnswerRevealed()) {
          <div class="animate-fade-in text-center">
            <p
              class="text-6xl font-semibold text-emerald-600 dark:text-emerald-400 sm:text-7xl"
              [class.font-japanese]="!isKanaPrompt()"
            >
              {{ session.currentPromptAnswer()?.answer }}
            </p>
          </div>
        }
      </div>

      <!-- Fixed Bottom Bar -->
      <div class="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95">
        <div class="container mx-auto max-w-2xl px-4 py-4">
          <!-- Action Button -->
          <div class="flex justify-center">
            @if (!session.isAnswerRevealed()) {
              <ui-button
                size="xl"
                (click)="session.reveal()"
                class="w-full max-w-md"
              >
                {{ 'trainer.reveal' | transloco }}
                <span class="ml-2 text-xs opacity-60">[Space]</span>
              </ui-button>
            } @else {
              <ui-button
                size="xl"
                (click)="session.nextItem()"
                class="w-full max-w-md"
              >
                {{ 'trainer.next' | transloco }}
                <span class="ml-2 text-xs opacity-60">[Space]</span>
              </ui-button>
            }
          </div>
        </div>
      </div>
    } @else {
      <!-- Session not active - redirect to settings -->
      <div class="container mx-auto max-w-4xl px-4">
        <div class="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">
            Redirecting to settings...
          </p>
        </div>
      </div>
    }
  `,
  styles: [],
})
export class TrainerPageComponent implements OnInit {
  readonly session = inject(TrainerSessionService);
  private readonly settingsService = inject(SettingsService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    // Если сессия не активна, перенаправляем на настройки
    if (!this.session.isActive()) {
      // Пробуем запустить сессию с текущими настройками
      if (this.settingsService.isValid()) {
        this.session.start(this.settingsService.settings());
        
        // Проверяем, что сессия успешно запустилась (пул не пустой)
        if (!this.session.isActive()) {
          this.router.navigate(['/']);
        }
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  /**
   * Обработчик клавиатурных событий.
   */
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Игнорируем, если фокус на input/textarea
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }

    switch (event.code) {
      case 'Space':
        event.preventDefault();
        this.session.handleAction();
        break;
      case 'Enter':
        if (this.session.isAnswerRevealed()) {
          event.preventDefault();
          this.session.nextItem();
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.goBack();
        break;
    }
  }

  /**
   * Возвращаемся к настройкам.
   */
  goBack(): void {
    this.session.stop();
    this.router.navigate(['/']);
  }

  /**
   * Проверяет, является ли prompt каной (для применения японского шрифта).
   */
  isKanaPrompt(): boolean {
    return this.settingsService.mode() === 'kana-to-romaji';
  }
}
