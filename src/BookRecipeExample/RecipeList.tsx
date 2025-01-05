import { Recipe } from './type';

interface RecipeListProps {
  recipe: Recipe;
  clickHandler: () => void;
}

const RecipeList = ({ recipe, clickHandler }: RecipeListProps) => {
  return (
    <div
      onClick={clickHandler}
      className='border-sm shadow-md hover:shadow-lg border-green-400 bg-green-50  p-2'
    >
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeList;
