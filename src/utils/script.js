
export function filterRecipe(recipe, query, filterKey){
    query = query.trim().toLowerCase();
    recipe = recipe.filter( recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.ingredients.join(" ").toLowerCase().includes(query) ||
        recipe.cuisine.toLowerCase().includes(query) ||
        recipe.tags.join(" ").toLowerCase().includes(query)
    )

    switch (filterKey){
        case 0:
            return recipe;
        case 1:
            return recipe.sort((a,b) => a.rating > b.rating ? -1: 1);
        case 2:
            return recipe.sort((a,b) => a.caloriesPerServing > b.caloriesPerServing ? -1: 1);
        case 3:
            return recipe.sort((a,b) => (a.prepTimeMinutes + a.cookTimeMinutes) < (b.prepTimeMinutes + b.cookTimeMinutes) ? -1: 1);
        default:
            return recipe;
    }
}