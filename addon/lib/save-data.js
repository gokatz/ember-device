
/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/save-data/index.js
 */

import getNavigator from "./navigator";

export default function getSaveDataStatus() {
  let navigator = getNavigator();

  let unsupported;
  if ('connection' in navigator && 'saveData' in navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  const isEnabled = unsupported ? null : navigator.connection.saveData === true;

  return { unsupported, isEnabled }
}