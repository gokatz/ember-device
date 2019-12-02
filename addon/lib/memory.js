/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/memory/index.js
 */

import window from 'ember-window-mock';

export default function getMemoryStatus() {
  let unsupported;
  if (typeof window.navigator !== 'undefined' && 'deviceMemory' in window.navigator) {
    unsupported = false;
  } else {
    unsupported = true;
  }
  let initialMemoryStatus;
  if (!unsupported) {
    const performanceMemory = 'memory' in window.performance ? window.performance.memory : null;
    initialMemoryStatus = {
      deviceMemory: window.navigator.deviceMemory,
      totalJSHeapSize: performanceMemory ? performanceMemory.totalJSHeapSize : null,
      usedJSHeapSize: performanceMemory ? performanceMemory.usedJSHeapSize : null,
      jsHeapSizeLimit: performanceMemory ? performanceMemory.jsHeapSizeLimit : null
    };
  } else {
    initialMemoryStatus = { unsupported };
  }

  return { ...initialMemoryStatus };  
}