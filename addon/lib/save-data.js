
/*
 * https://github.com/GoogleChromeLabs/react-adaptive-hooks/blob/master/save-data/index.js
 */

import window from 'ember-window-mock';

export default function getSaveDataStatus() {
  let unsupported;
  if ('connection' in window.navigator && 'saveData' in window.navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  const isEnabled = unsupported ? null : window.navigator.connection.saveData === true;

  return { unsupported, isEnabled }
}