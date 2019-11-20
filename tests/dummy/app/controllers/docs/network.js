  // BEGIN-SNIPPET network-connection.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default class DemoController extends Controller {
  @service
  device;
  
  @reads('device.networkStatus.effectiveConnectionType')
  effectiveConnectionType;

  get is2G() {
    return this.device.networkStatus.effectiveConnectionType === '2g'
  }

  get is3G() {
    return this.device.networkStatus.effectiveConnectionType === '3g'
  }

  get is4G() {
    return this.device.networkStatus.effectiveConnectionType === '4g'
  }
}

// END-SNIPPET