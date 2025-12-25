import {ApplicationConfig, isDevMode, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideTransloco} from '@jsverse/transloco';

import {routes} from './app.routes';
import {TranslocoHttpLoader} from './transloco-loader';
import {appProviders} from './infrastructure/di/app.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru', 'no'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    ...appProviders,
  ],
};
