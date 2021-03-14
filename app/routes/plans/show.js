import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PlansShowRoute extends Route {
  @service store;

  model({ plan_id }) {
    return hash({
      plan: this.store.findRecord('mealPlan', plan_id),
      recipes: this.store.query('recipe', { subscribe: true }),
    });
  }
}
