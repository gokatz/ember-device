import Controller from './base';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET network-connection.js

export default class DemoController extends Controller {
  @service
  device;
}

// END-SNIPPET
