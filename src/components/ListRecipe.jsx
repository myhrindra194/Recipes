/* eslint-disable react/prop-types */
import RecipeCard from "./RecipeCard";
import  Noresult  from "../assets/Noresult.png";

export default function ListRecipe({myRecipes}){
    return (myRecipes.length === 0) ?
    (
        <div className="container d-flex justify-content-center">
            <img src={Noresult} alt="No result found" />
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
                    calories={recipe.caloriesPerServing}
                />
            ))

        }
        </div>
    )
}