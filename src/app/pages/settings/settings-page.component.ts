import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslocoPipe} from '@jsverse/transloco';
import {SettingsService} from '../../application/services/settings.service';
import {TrainerSessionService} from '../../application/services/trainer-session.service';
import type {Category, Script, TrainerMode} from '../../domain';
import {ButtonComponent} from '../../shared/ui';

/**
 * Страница настроек тренажёра.
 */
@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [TranslocoPipe, ButtonComponent],
  template: `
    <div class="container mx-auto max-w-2xl px-4 pt-8 pb-32 animate-slide-up">
      <h1 class="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        {{ 'settings.title' | transloco }}
      </h1>

      <!-- Mode Selection - Visual Cards -->
      <div class="mb-6">
        <div class="mb-4 flex items-baseline justify-between">
          <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {{ 'settings.mode' | transloco }}
          </h2>
          <span class="text-xs text-gray-400 dark:text-gray-500">
            {{ 'settings.hints.chooseOne' | transloco }}
          </span>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Romaji → Kana Card -->
          <button
            type="button"
            (click)="onModeChange('romaji-to-kana')"
            class="group relative flex flex-col items-center rounded-xl border-2 p-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.mode() === 'romaji-to-kana'
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.mode() === 'romaji-to-kana'"
          >
            <!-- Selection indicator -->
            @if (settingsService.mode() === 'romaji-to-kana') {
              <div class="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }

            <!-- Preview -->
            <div class="mb-4 flex flex-col items-center gap-2">
              <span class="text-3xl font-bold text-gray-900 dark:text-gray-100">ka</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">か</span>
            </div>

            <!-- Label -->
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
              {{ 'settings.modeOptions.romajiToKana' | transloco }}
            </span>
          </button>

          <!-- Kana → Romaji Card -->
          <button
            type="button"
            (click)="onModeChange('kana-to-romaji')"
            class="group relative flex flex-col items-center rounded-xl border-2 p-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.mode() === 'kana-to-romaji'
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.mode() === 'kana-to-romaji'"
          >
            <!-- Selection indicator -->
            @if (settingsService.mode() === 'kana-to-romaji') {
              <div class="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }

            <!-- Preview -->
            <div class="mb-4 flex flex-col items-center gap-2">
              <span class="text-3xl font-bold text-gray-900 dark:text-gray-100">か</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">ka</span>
            </div>

            <!-- Label -->
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
              {{ 'settings.modeOptions.kanaToRomaji' | transloco }}
            </span>
          </button>
        </div>
      </div>

      <!-- Scripts Selection - Visual Cards -->
      <div class="mb-6">
        <div class="mb-4 flex items-baseline justify-between">
          <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {{ 'settings.scripts' | transloco }}
          </h2>
          <span class="text-xs text-gray-400 dark:text-gray-500">
            {{ 'settings.hints.selectMultiple' | transloco }}
          </span>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Hiragana Card -->
          <button
            type="button"
            (click)="onScriptToggle('hiragana')"
            class="group relative flex flex-col items-center rounded-xl border-2 p-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isScriptSelected('hiragana')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isScriptSelected('hiragana')"
          >
            <!-- Selection indicator -->
            @if (settingsService.isScriptSelected('hiragana')) {
              <div class="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }

            <!-- Preview Characters -->
            <div class="mb-3 flex items-center gap-3">
              <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">あ</span>
              <span class="text-4xl font-bold text-gray-600 dark:text-gray-400">い</span>
              <span class="text-4xl font-bold text-gray-400 dark:text-gray-500">う</span>
            </div>

            <!-- Label -->
            <span class="text-base font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.scriptOptions.hiragana' | transloco }}
            </span>

            <!-- Description -->
            <span class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.scriptDescriptions.hiragana' | transloco }}
            </span>
          </button>

          <!-- Katakana Card -->
          <button
            type="button"
            (click)="onScriptToggle('katakana')"
            class="group relative flex flex-col items-center rounded-xl border-2 p-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isScriptSelected('katakana')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isScriptSelected('katakana')"
          >
            <!-- Selection indicator -->
            @if (settingsService.isScriptSelected('katakana')) {
              <div class="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }

            <!-- Preview Characters -->
            <div class="mb-3 flex items-center gap-3">
              <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">ア</span>
              <span class="text-4xl font-bold text-gray-600 dark:text-gray-400">イ</span>
              <span class="text-4xl font-bold text-gray-400 dark:text-gray-500">ウ</span>
            </div>

            <!-- Label -->
            <span class="text-base font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.scriptOptions.katakana' | transloco }}
            </span>

            <!-- Description -->
            <span class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.scriptDescriptions.katakana' | transloco }}
            </span>
          </button>
        </div>
      </div>

      <!-- Categories Selection - Visual Cards -->
      <div class="mb-8">
        <div class="mb-4 flex items-baseline justify-between">
          <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {{ 'settings.categories' | transloco }}
          </h2>
          <span class="text-xs text-gray-400 dark:text-gray-500">
            {{ 'settings.hints.selectMultiple' | transloco }}
          </span>
        </div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Basic (Gojūon) Card -->
          <button
            type="button"
            (click)="onCategoryToggle('basic')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('basic')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('basic')"
          >
            @if (settingsService.isCategorySelected('basic')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">あ</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">か</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">さ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.basic' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.basic' | transloco }}
            </span>
          </button>

          <!-- Dakuten Card -->
          <button
            type="button"
            (click)="onCategoryToggle('dakuten')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('dakuten')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('dakuten')"
          >
            @if (settingsService.isCategorySelected('dakuten')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">が</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">ざ</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">だ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.dakuten' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.dakuten' | transloco }}
            </span>
          </button>

          <!-- Handakuten Card -->
          <button
            type="button"
            (click)="onCategoryToggle('handakuten')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('handakuten')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('handakuten')"
          >
            @if (settingsService.isCategorySelected('handakuten')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">ぱ</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">ぴ</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">ぷ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.handakuten' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.handakuten' | transloco }}
            </span>
          </button>

          <!-- Yōon Card -->
          <button
            type="button"
            (click)="onCategoryToggle('yoon')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('yoon')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('yoon')"
          >
            @if (settingsService.isCategorySelected('yoon')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">きゃ</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">しゅ</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">ちょ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.yoon' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.yoon' | transloco }}
            </span>
          </button>

          <!-- Small Vowels Card -->
          <button
            type="button"
            (click)="onCategoryToggle('small-vowels')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('small-vowels')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('small-vowels')"
          >
            @if (settingsService.isCategorySelected('small-vowels')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">ぁ</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">ぃ</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">ぅ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.smallVowels' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.smallVowels' | transloco }}
            </span>
          </button>

          <!-- Extended Katakana Card -->
          <button
            type="button"
            (click)="onCategoryToggle('extended-katakana')"
            class="group relative flex flex-col items-center rounded-xl border-2 px-4 py-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            [class]="settingsService.isCategorySelected('extended-katakana')
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-750'"
            [attr.aria-pressed]="settingsService.isCategorySelected('extended-katakana')"
          >
            @if (settingsService.isCategorySelected('extended-katakana')) {
              <div class="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            }
            <div class="mb-2 flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">ティ</span>
              <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">ファ</span>
              <span class="text-2xl font-bold text-gray-400 dark:text-gray-500">ヴァ</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ 'settings.categoryOptions.extendedKatakana' | transloco }}
            </span>
            <span class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ 'settings.categoryDescriptions.extendedKatakana' | transloco }}
            </span>
          </button>
        </div>
      </div>

    </div>

    <!-- Fixed Bottom Bar -->
    <div class="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95">
      <div class="container mx-auto max-w-2xl px-4 py-4">
        <!-- Validation/Pool Info -->
        <div class="mb-3 text-center">
          @if (settingsService.invalidReason() === 'no-selection') {
            <p class="text-sm text-red-600 dark:text-red-400">
              {{ 'settings.validationError' | transloco }}
            </p>
          } @else if (settingsService.invalidReason() === 'empty-pool') {
            <p class="text-sm text-amber-600 dark:text-amber-400">
              {{ 'settings.emptyPoolError' | transloco }}
            </p>
          } @else if (settingsService.poolSize() > 0) {
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ 'settings.poolSize' | transloco: { count: settingsService.poolSize() } }}
            </p>
          }
        </div>

        <!-- Start Button -->
        <div class="flex justify-center">
          <ui-button
            size="xl"
            [disabled]="!settingsService.isValid()"
            (click)="onStart()"
            class="w-full max-w-md"
          >
            {{ 'settings.start' | transloco }}
          </ui-button>
        </div>
      </div>
    </div>
  `,
})
export class SettingsPageComponent {
  readonly settingsService = inject(SettingsService);
  private readonly trainerSession = inject(TrainerSessionService);
  private readonly router = inject(Router);

  readonly scripts: Script[] = ['hiragana', 'katakana'];
  readonly categories: Category[] = [
    'basic',
    'dakuten',
    'handakuten',
    'yoon',
    'small-vowels',
    'extended-katakana',
  ];

  /** Маппинг категорий на ключи переводов (camelCase) */
  readonly categoryKeyMap: Record<Category, string> = {
    'basic': 'basic',
    'dakuten': 'dakuten',
    'handakuten': 'handakuten',
    'yoon': 'yoon',
    'small-vowels': 'smallVowels',
    'extended-katakana': 'extendedKatakana',
  };

  onModeChange(mode: TrainerMode): void {
    this.settingsService.setMode(mode);
  }

  onScriptToggle(script: Script): void {
    this.settingsService.toggleScript(script);
  }

  onCategoryToggle(category: Category): void {
    this.settingsService.toggleCategory(category);
  }

  onStart(): void {
    if (!this.settingsService.isValid()) {
      return;
    }
    this.trainerSession.start(this.settingsService.settings());
    this.router.navigate(['/train']);
  }
}
