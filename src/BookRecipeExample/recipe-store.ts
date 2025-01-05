import {create} from 'zustand';
import { RecipeStore } from './type';

export const useRecipe = create<RecipeStore>((set)=>({
    recipes:[],
    addRecipe:(recipe)=>set((state)=>({
        recipes: [...state.recipes, recipe]
    })),
    removeRecipe:(id)=>set((state)=>({
        recipes: state.recipes.filter(r=>r.id!==id)
    })),
    editRecipe:(recipe)=>set((state)=>({
        recipes: [...state.recipes,recipe]
    }))
    
}));