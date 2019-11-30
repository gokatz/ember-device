
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DemoController extends Controller {
  canShow = true;

  @action
  refresh() {
    this.set('canShow', false);
    setTimeout(() => {
      this.set('canShow', true);
    }, 0);
  }
}