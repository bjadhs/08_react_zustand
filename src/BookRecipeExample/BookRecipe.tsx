import { useState } from 'react';
import { useRecipe } from './recipe-store';
import { Recipe } from './type';
import RecipeList from './RecipeList';

const BookRecipe = () => {
  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  // const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  const { recipes, addRecipe, editRecipe } = useRecipe();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecipe: Recipe = {
      id: Math.floor(Math.random() * 1000),
      name,
      ingredients: ingredients.split(','),
      instructions: instructions.split('. '),
    };
    if (editMode) {
      editRecipe(newRecipe);
      setEditMode(false);
    } else {
      if (
        name.trim() === '' ||
        ingredients.trim() === '' ||
        instructions.trim() === ''
      ) {
        return;
      }
      addRecipe(newRecipe);
      setName('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <div className='min-h-screen bg-yellow-200 flex flex-col justify-center items-center'>
      <div className='bg-white border-md shadow-lg p-6 max-w-2xl'>
        <h1>Recipe Book</h1>
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Recipe Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-md p-2'
          />
          <input
            type='text'
            placeholder='Ingredients'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className='border-md p-2'
          />
          <textarea
            placeholder='Instructions'
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className='border-md p-2'
          />
          <button type='submit' className='bg-blue-500 text-white p-2'>
            {editMode ? 'Edit Recipe' : 'Add Recipe'}
          </button>
        </form>
      </div>
      <br />
      <div className='bg-white border-md shadow-lg p-6 w-full'>
        <h2>Recipes</h2>
        <hr />

        <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {recipes.map((recipe: Recipe) => (
            <RecipeList
              key={recipe.id}
              recipe={recipe}
              clickHandler={() => setEditMode(true)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecipe;
