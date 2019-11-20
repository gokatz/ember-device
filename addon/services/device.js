import Service from '@ember/service';
import getHardwareConcurrency from '../lib/hardware-concurrency';
import getSaveDataStatus from '../lib/save-data';
import getNetworkStatus from '../lib/network';
import getMemoryStatus from '../lib/memory';
import { tracked } from '@glimmer/tracking';

export default class DeviceService extends Service {

  constructor() {
    super(...arguments);

    if (!this.networkStatus.unsupported) {
      navigator.connection.addEventListener('change', () => {
        this.networkStatus = getNetworkStatus();
      });
    }
  }

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
   * @type {object [numberOfLogicalProcessors<number>, unsupported<bool>] }
   */
  get hardwareConcurrency() {
    return getHardwareConcurrency();
  }

  get saveData() {
    return getSaveDataStatus();
  }

  @tracked
  _networkStatus = getNetworkStatus();
  
  get networkStatus() {
    return this._networkStatus;
  }
  set networkStatus(networkStatus) {
    this._networkStatus = networkStatus;
  }

  get memory() {
    return getMemoryStatus();
  }
}
