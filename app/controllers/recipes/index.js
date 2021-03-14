import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class RecipesIndexController extends Controller {
  @service store;

  createRecipe = async () => {
    let recipe = this.store.createRecord('recipe', {
      name: 'New Recipe',
      numServings: 0,
      totalCalories: 0,
      instructions: '',
    });

    await recipe.save();

    this.transitionToRoute('recipes.show', recipe.id);
  };
}
