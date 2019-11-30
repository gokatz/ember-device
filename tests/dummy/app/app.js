import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import deviceMock from './device-mock';


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

window.__eas_dummy_navigator = deviceMock;

loadInitializers(App, config.modulePrefix);

export default App;
