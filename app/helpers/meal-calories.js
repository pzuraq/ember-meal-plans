import { helper } from '@ember/component/helper';

export function mealCalories([meal]) {
  let { recipe, servings } = meal;

  if (recipe) {
    return Math.floor((recipe.totalCalories / recipe.numServings) * servings);
  } else {
    return 0;
  }
}

export default helper(mealCalories);
