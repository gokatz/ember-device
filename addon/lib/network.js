/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/network/index.js
 */

import getNavigator from "./navigator";

let unsupported;

export default function getNetworkStatus() {

  let navigator = getNavigator();

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