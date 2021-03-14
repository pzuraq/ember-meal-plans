import Controller from '@ember/controller';

export default class RecipesShowController extends Controller {
  save = () => {
    this.model.save();
  };
}
