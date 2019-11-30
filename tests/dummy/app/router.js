import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('network');
    this.route('savedata');
    this.route('hardware-concurrency');
    this.route('memory');  
    this.route('installation');
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;