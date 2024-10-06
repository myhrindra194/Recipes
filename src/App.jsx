import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ListRecipe from "./components/ListRecipe";
import { filterRecipe } from "./utils/script";
import { Button, ButtonGroup } from "reactstrap";
import Banner from "./components/Banner";
import {URL} from "./utils/url";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [rSelected, setRSelected] = useState(0);

  
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(recipes => setRecipes(recipes.recipes))
    .catch(error => {console.error("Error of connection while fetching data"), error})
  })

  const res = filterRecipe(recipes, searchWord, rSelected);
  
  return (
    <div className="container">
      {
        (recipes.length === 0) ?
        <Loader />:
        <Banner value={searchWord} onChange ={(e) => setSearchWord(e.target.value)} size={res.length}>
          <ButtonGroup>
              <Button 
                color="btn btn-outline-dark" 
                onClick={() => setRSelected(0)} 
                active={rSelected === 0}
                style={{fontSize:"14px"}}
                >
                Default
              </Button>
              <Button 
                color="btn btn-outline-dark" 
                onClick={() => setRSelected(1)} 
                active={rSelected === 1}
                style={{fontSize:"14px"}}
                >
                  Rating
              </Button>
              <Button 
                color="btn btn-outline-dark" 
                onClick={() => setRSelected(2)} 
                active={rSelected === 2}
                style={{fontSize:"14px"}}
                >
                  Calories
              </Button>
              <Button 
                color="btn btn-outline-dark" 
                onClick={() => setRSelected(3)} 
                active={rSelected === 3}
                style={{fontSize:"14px"}}
                >
                  Cooking time
              </Button>
          </ButtonGroup>
          <ListRecipe myRecipes={res}/>
        </Banner>
      }
    </div>
  )
}

export default App