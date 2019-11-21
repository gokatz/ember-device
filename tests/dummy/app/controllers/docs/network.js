// BEGIN-SNIPPET network-connection.js

import Controller from './base';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default class DemoController extends Controller {
  @service
  device;
  
  @reads('device.networkStatus.effectiveConnectionType')
  effectiveConnectionType;
}

// END-SNIPPET
