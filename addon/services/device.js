import Service from '@ember/service';
import getHardwareConcurrency from '../lib/hardware-concurrency';
import getSaveDataStatus from '../lib/save-data';
import getNetworkStatus from '../lib/network';
import getMemoryStatus from '../lib/memory';
import { computed } from '@ember/object';

export default class DeviceService extends Service {

  constructor() {
    super(...arguments);

    if (!this.networkStatus.unsupported) {
      navigator.connection.addEventListener('change', () => {
        this.set('_saveData', getSaveDataStatus());
        this.set('_networkStatus', getNetworkStatus());
      });
    }
  }

  _saveData = getSaveDataStatus();

  /**
   * Return Date Saver preference of the user.
   * 
   * **isEnabled**: isEnabled
   * 
   * **unsupported**: return `true` if the device has no support for fetching the hardware details.
   * 
   * @type {object}
  */
  @computed('_saveData.{isEnabled,unsupported}')
  get saveData() {
    return this._saveData;
  }

  // set saveData(saveData) {
  //   this._saveData = saveData;
  // }

  _networkStatus = getNetworkStatus();
  
  /**
   * Return effectiveConnectionType
   * 
   * **effectiveConnectionType**: effectiveConnectionType
   * 
   * **unsupported**: return `true` if the device has no support for fetching the hardware details.
   * 
   * @type {object}
   */

  @computed('_networkStatus.{effectiveConnectionType,unsupported}')
  get networkStatus() {
    return this._networkStatus;
  }
  // set networkStatus(networkStatus) {
  //   this._networkStatus = networkStatus;
  // }

  /**
   * [Hardware concurrency](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)
   * returns the number of logical processors available to run threads on the user's computer. Thus we can scale up/down the
   * usage of the processor as we want
   * 
   * **numberOfLogicalProcessors**: the number of logical processors available to run threads on the user's computer. 
   * Thus we can scale up/down the usage of the processor as we want
   * 
   * **unsupported**: return `true` if the device has no support for fetching the hardware details.
   * 
   * @type {object}
   */
  get hardwareConcurrency() {
    return getHardwareConcurrency();
  }

  /**
   * [Memory usage and pressure](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)
   * details 
   * 
   * **deviceMemory**: deviceMemory
   * 
   * **totalJSHeapSize**: totalJSHeapSize
   * 
   * **usedJSHeapSize**: usedJSHeapSize
   * 
   * **jsHeapSizeLimit**: jsHeapSizeLimit
   * 
   * **unsupported**: return `true` if the device has no support for fetching the hardware details.
   * 
   * @type {object}
   */
  get memory() {
    return getMemoryStatus();
  }
}
