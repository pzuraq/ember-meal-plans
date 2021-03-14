import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-meal-plans/config/environment';

window.EmberDataENV = { ENABLE_OPTIONAL_FEATURES: true };
window.M3ENV = { FEATURES: { PROXY_MODEL_CLASS: true } };

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
