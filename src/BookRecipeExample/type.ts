export interface Recipe{
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
}
export interface RecipeStore{
     recipes:Recipe[],
    addRecipe:(recipe:Recipe)=>void,
    removeRecipe:(id:number)=>void,
    editRecipe:(recipe:Recipe)=>void,
}