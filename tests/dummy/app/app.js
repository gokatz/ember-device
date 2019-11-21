import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

window.__eas_dummy_navigator = {
  connection: {
    effectiveType: 'slow-2g',
    saveData: false
  },
  deviceMemory: 0.5,
  hardwareConcurrency: 2
}

loadInitializers(App, config.modulePrefix);

export default App;
