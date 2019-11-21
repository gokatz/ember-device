  // BEGIN-SNIPPET hw.js

import Controller from './base';
import { inject as service } from '@ember/service';

export default class DemoController extends Controller {
  @service
  device;
}

// END-SNIPPET