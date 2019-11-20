  // BEGIN-SNIPPET hw.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DemoController extends Controller {
  @service
  device;

  get highCoreMachine() {
    return this.device.hardwareConcurrency.numberOfLogicalProcessors >= 4;
  }
}

// END-SNIPPET