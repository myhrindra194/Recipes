import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ListRecipe from "./components/ListRecipe";
import { filterRecipe } from "./utils/function";
import { Button, ButtonGroup, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Banner from "./components/Banner";
import { fetchData } from "./utils/fetchData";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [rSelected, setRSelected] = useState(0);
  const [beginIndex, setBeginIndex] = useState(0);
  const itemPerPage = 4;

  useEffect(() => {
    fetchData().then(res => setRecipes(res.recipes))
  }, [])

  const res = filterRecipe(recipes, searchWord, rSelected);
  const pages =  Array.from({ length: Math.ceil(res.length / itemPerPage) }, (_, i) => i + 1);
  const visibleRecipes = res.slice(beginIndex, beginIndex + itemPerPage);
  
  return (
    <div className="container mt-4">
      {
        (recipes.length === 0) ?
        <Loader />:
        <Banner 
          value={searchWord} 
          onChange ={(e) => {
            setSearchWord(e.target.value);
            setBeginIndex(0);
          }} 
          size={res.length}>
          <div className="d-md-flex justify-content-between align-items-start">
            <ButtonGroup>
                <Button 
                  color="btn btn-outline-dark" 
                  onClick={() => {setRSelected(0); setBeginIndex(0)}} 
                  active={rSelected === 0}
                  style={{fontSize:"14px"}}
                  >
                  Default
                </Button>
                <Button 
                  color="btn btn-outline-dark" 
                  onClick={() => {setRSelected(1); setBeginIndex(0)}} 
                  active={rSelected === 1}
                  style={{fontSize:"14px"}}
                  >
                    Rating
                </Button>
                <Button 
                  color="btn btn-outline-dark" 
                  onClick={() => {setRSelected(2);setBeginIndex(0)}} 
                  active={rSelected === 2}
                  style={{fontSize:"14px"}}
                  >
                    Calories
                </Button>
                <Button 
                  color="btn btn-outline-dark" 
                  onClick={() => {setRSelected(3); setBeginIndex(0)}} 
                  active={rSelected === 3}
                  style={{fontSize:"14px"}}
                  >
                    Cooking time
                </Button>
            </ButtonGroup>
            <Pagination className="mt-3 mt-md-0 align-items-center">
              {
                pages.map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink style={{fontSize:"14px"}} onClick={() => {setBeginIndex((page - 1) * itemPerPage)}} >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))
              }
            </Pagination>
          </div>
          <ListRecipe myRecipes={visibleRecipes}/>
        </Banner>
      }
    </div>
  )
}

export default App