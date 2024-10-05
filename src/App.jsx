import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import ListRecipe from "./components/ListRecipe";
import { searchRecipe } from "./utils/script";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(recipes => setRecipes(recipes.recipes))
    .catch(error => {console.error("Error of connection while fetching data"), error})
  })

  const res = searchRecipe(recipes, searchWord);

  return (
    <div className="container">
      
      {
        (recipes.length === 0) ?
        <Loader />:
        <>
          <Banner size={recipes.length} value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
          <ListRecipe myRecipes={res}/>
        </>
      }
    </div>
  )
}

export default App