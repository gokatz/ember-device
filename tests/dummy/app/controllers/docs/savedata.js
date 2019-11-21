import Controller from './base';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

// BEGIN-SNIPPET save-data-usage.js

export default class DemoController extends Controller {
  @service
  device;

  @reads('device.saveData.isEnabled')
  isDataSaverModeOn
}

// END-SNIPPET