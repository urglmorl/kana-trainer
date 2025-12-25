import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/settings/settings-page.component').then(
        (m) => m.SettingsPageComponent
      ),
  },
  {
    path: 'train',
    loadComponent: () =>
      import('./pages/trainer/trainer-page.component').then(
        (m) => m.TrainerPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
