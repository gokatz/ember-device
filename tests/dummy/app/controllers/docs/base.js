
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class DemoController extends Controller {
  
  @service
  router;

  canShow = true;

  @action
  refresh() {
    this.set('canShow', false);
    setTimeout(() => {
      this.set('canShow', true);
    }, 0);
  }
}