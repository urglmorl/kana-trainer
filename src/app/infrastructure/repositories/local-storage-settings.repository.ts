import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import type {ISettingsRepository, TrainerSettings} from '../../domain';

const STORAGE_KEY = 'kana-trainer-settings';

/**
 * Реализация репозитория настроек через localStorage.
 */
@Injectable()
export class LocalStorageSettingsRepository implements ISettingsRepository {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  load(): TrainerSettings | null {
    if (!this.isBrowser) {
      return null;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return null;
      }
      return JSON.parse(stored) as TrainerSettings;
    } catch {
      console.warn('Failed to load settings from localStorage');
      return null;
    }
  }

  save(settings: TrainerSettings): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      console.warn('Failed to save settings to localStorage');
    }
  }
}

