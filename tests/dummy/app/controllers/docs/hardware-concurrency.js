
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// BEGIN-SNIPPET hw.js

export default class DemoController extends Controller {
  @service
  device;
}

// END-SNIPPET