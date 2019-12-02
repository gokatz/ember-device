/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/hardware-concurrency/index.js
 */
import window from 'ember-window-mock';

export default function getHardwareConcurrency() {
  let initialHardwareConcurrency;
  if (typeof window.navigator !== 'undefined' && 'hardwareConcurrency' in window.navigator) {
    initialHardwareConcurrency = { numberOfLogicalProcessors: window.navigator.hardwareConcurrency };
  } else {
    initialHardwareConcurrency = { unsupported: true };
  }
  return initialHardwareConcurrency;  
}