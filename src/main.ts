import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routesConfi from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routesConfi),
    provideHttpClient(),
  ]
})
  .catch((err) => console.error(err));
