import Controller from '@ember/controller';

export default class PlansShowController extends Controller {
  save = () => {
    this.model.plan.save();
  };

  addDay = () => {
    this.model.plan.days.push({
      meals: [
        {
          name: 'New Meal',
          recipe: null,
          servings: 1,
        },
      ],
    });

    this.model.plan.save();
  };

  addMeal = (day) => {
    day.meals.push({
      name: 'New Meal',
      recipe: null,
      servings: 1,
    });

    this.model.plan.save();
  }
}
