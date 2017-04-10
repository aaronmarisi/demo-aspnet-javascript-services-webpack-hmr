import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, rootElementTagName } from './app/app.module';
import { environment } from './environments/environment';
import { handleHotModule } from './handleHotModule';

const platform = platformBrowserDynamic();

handleHotModule(module, rootElementTagName, platform, isModuleHot => {
  if (environment.production && !isModuleHot) {
    enableProdMode();
  }

  platform.bootstrapModule(AppModule);
});
