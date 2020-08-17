import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const appId = "bac3da21";
  const appKey = "eee7692fa517be649920fd10bcd5054e";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=10`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
      });
  }, [query]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((item) => (
          <Recipe
            key={item.recipe.label}
            title={item.recipe.label}
            calories={item.recipe.calories}
            img={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
