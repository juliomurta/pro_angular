import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StoreFirstGuard } from './storeFirst.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), StoreFirstGuard]
};
