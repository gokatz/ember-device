/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/network/index.js
 */

import window from 'ember-window-mock';

let unsupported;

export default function getNetworkStatus() {
  if ('connection' in window.navigator && 'effectiveType' in window.navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  return !unsupported ? {
    effectiveConnectionType: window.navigator.connection.effectiveType
  } : {
    unsupported
  };
}