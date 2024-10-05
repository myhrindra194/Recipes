export function searchRecipe(recipes, query){
    query = query.toLowerCase();
    return(recipes.filter( recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.ingredients.join(" ").toLowerCase().includes(query) ||
        recipe.cuisine.toLowerCase().includes(query) ||
        recipe.tags.join(" ").toLowerCase().includes(query)
    ))
}