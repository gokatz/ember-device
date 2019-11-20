  // BEGIN-SNIPPET memory.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DemoController extends Controller {
  @service
  device;

  get highMemoryMachine() {
    return this.device.memory.deviceMemory > 4;
  }
}

// END-SNIPPET