import { helper } from '@ember/component/helper';
import { mealCalories } from './meal-calories';

export default helper(([day]) => {
  let total = 0;

  day.meals.forEach((meal) => {
    total += mealCalories([meal]);
  });

  return total;
});
