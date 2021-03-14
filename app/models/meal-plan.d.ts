import Recipe from './recipe';

interface Meal {
  name: string;
  recipe: Recipe;
  servings: number;
}

interface Day {
  meals: Meal[];
}

interface MealPlan {
  name: string;
  days: Day[];
}

export default MealPlan;
