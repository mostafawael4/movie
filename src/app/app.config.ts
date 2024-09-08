import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration() , importProvidersFrom(HttpClientModule , RouterModule , BrowserAnimationsModule), provideAnimationsAsync()]
};
