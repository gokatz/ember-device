/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/memory/index.js
 */

import getNavigator from "./navigator";

export default function getMemoryStatus() {
  let navigator = getNavigator();
  let unsupported;
  if (typeof navigator !== 'undefined' && 'deviceMemory' in navigator) {
    unsupported = false;
  } else {
    unsupported = true;
  }
  let initialMemoryStatus;
  if (!unsupported) {
    const performanceMemory = 'memory' in performance ? performance.memory : null;
    initialMemoryStatus = {
      deviceMemory: navigator.deviceMemory,
      totalJSHeapSize: performanceMemory ? performanceMemory.totalJSHeapSize : null,
      usedJSHeapSize: performanceMemory ? performanceMemory.usedJSHeapSize : null,
      jsHeapSizeLimit: performanceMemory ? performanceMemory.jsHeapSizeLimit : null
    };
  } else {
    initialMemoryStatus = { unsupported };
  }

  return { ...initialMemoryStatus };  
}