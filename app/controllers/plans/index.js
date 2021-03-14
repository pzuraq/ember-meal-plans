import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PlansIndexController extends Controller {
  @service store;

  createPlan = async () => {
    let plan = this.store.createRecord('mealPlan', {
      name: 'New Plan',
      days: [],
    });

    await plan.save();

    this.transitionToRoute('plans.show', plan.id);
  };
}
