import { Type, PlatformRef } from '@angular/core';

interface HotModule extends NodeModule {
  hot?: HotModuleHandler;
}

interface HotModuleHandler {
  accept: () => void;
  dispose: (callback: () => void) => void;
}

export function handleHotModule(
  bootstrapModule: HotModule,
  rootElemTagName: string,
  platform: PlatformRef,
  bootFunction: (isModuleHot: boolean) => void
): void {
  const isModuleHot = !!bootstrapModule.hot;

  if (isModuleHot) {
    bootstrapModule.hot.accept();
    bootstrapModule.hot.dispose(() => {
      const oldRootElem = document.querySelector(rootElemTagName);
      const newRootElem = document.createElement(rootElemTagName);
      oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
      platform.destroy();
    });
  }

  if (document.readyState === 'complete') {
    bootFunction(isModuleHot);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      bootFunction(isModuleHot);
    });
  }
}
