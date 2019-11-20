  // BEGIN-SNIPPET save-data-usage.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DemoController extends Controller {
  @service
  device;
}

// END-SNIPPET