/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/hardware-concurrency/index.js
 */

import navigator from "./navigator";

export default function getHardwareConcurrency() {
  let initialHardwareConcurrency;
  if (typeof navigator !== 'undefined' && 'hardwareConcurrency' in navigator) {
    initialHardwareConcurrency = { numberOfLogicalProcessors: navigator.hardwareConcurrency };
  } else {
    initialHardwareConcurrency = { unsupported: true };
  }
  return initialHardwareConcurrency;  
}