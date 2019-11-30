/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/network/index.js
 */

import navigator from "./navigator";

let unsupported;

export default function getNetworkStatus() {

  if ('connection' in navigator && 'effectiveType' in navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  return !unsupported ? {
    effectiveConnectionType: navigator.connection.effectiveType
  } : {
    unsupported
  };
}