import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesShowRoute extends Route {
  @service store;

  model({ recipe_id }) {
    return this.store.findRecord('recipe', recipe_id);
  }
}
