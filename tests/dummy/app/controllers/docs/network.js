import Controller from './base';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

// BEGIN-SNIPPET network-connection.js

export default class DemoController extends Controller {
  @service
  device;
  
  @reads('device.networkStatus.effectiveConnectionType')
  effectiveConnectionType;
}

// END-SNIPPET
