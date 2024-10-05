/* eslint-disable react/prop-types */
import RecipeCard from "./RecipeCard";

export default function ListRecipe({myRecipes}){
    return(
        <div className="container d-flex row justify-content-between align-items-center my-5">
        {
            myRecipes.map(recipe => (
                <RecipeCard 
                    key={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    prepMin={recipe.prepTimeMinutes}
                    cookMin={recipe.cookTimeMinutes}
                    rating={recipe.rating}
                    reviewCount={recipe.reviewCount}
                />
            ))

        }
        </div>
    )
}