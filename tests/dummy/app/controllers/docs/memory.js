import Controller from './base';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET memory.js

export default class DemoController extends Controller {
  @service
  device;

  deviceMemory = this.device.memory.deviceMemory;
}

// END-SNIPPET