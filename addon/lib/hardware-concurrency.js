/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/hardware-concurrency/index.js
 */

import getNavigator from "./navigator";

export default function getHardwareConcurrency() {
  let navigator = getNavigator();
  let initialHardwareConcurrency;
  if (typeof navigator !== 'undefined' && 'hardwareConcurrency' in navigator) {
    initialHardwareConcurrency = { numberOfLogicalProcessors: navigator.hardwareConcurrency };
  } else {
    initialHardwareConcurrency = { unsupported: true };
  }
  return initialHardwareConcurrency;  
}