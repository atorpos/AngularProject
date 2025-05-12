import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), {
    provide: NGX_ECHARTS_CONFIG,
    useFactory: () => ({ echarts: () => import('echarts') })
  }]
};
