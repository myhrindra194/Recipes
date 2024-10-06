/* eslint-disable react/prop-types */
import RecipeCard from "./RecipeCard";

export default function ListRecipe({myRecipes}){
    return (myRecipes.length === 0) ?
    (
        <div className="container d-flex justify-content-center mt-5 pt-5">
          <p className="py-5">No item found</p>
        </div>
    ):
    (
        <div className="d-flex row justify-content-center align-items-start my-5">
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
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    serving={recipe.servings}
                />
            ))

        }
        </div>
    )
}