import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'


const Search= () => {

  const APP_ID = "c16efc0d";
  const APP_KEY = "59bd419dcec835f30bc4b53ddd8428eb";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(' ')
  
  useEffect( () => {
    getRecipes();
    
  }, [query]);
  
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch(' ')
    }
  
    return <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>
          Search
        </button>
        
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe 
        key= {recipe.recipe.label}
        title={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}
        link={recipe.recipe.url} />
      ))}
      </div>
  </div>
    };
    

    export default Search;