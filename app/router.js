import EmberRouter from '@ember/routing/router';
import config from 'ember-meal-plans/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('recipes', function () {
    this.route('show', { path: '/:recipe_id' });
  });
  this.route('plans', function () {
    this.route('show', { path: '/:plan_id' });
  });
});
