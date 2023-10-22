import { useEffect, useState } from "react";
import image from "./vegetables.png";
import "./App.css";
import MyRecipesComponent from "./MyRecipesComponent";

function App() {
  const MY_ID = "53a98e63";
  const MY_KEY = "3a4cb98212882b01a9f814fbf0367e43";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div>
      <div className="container">
        <img src={image} alt="food" className="image" />
        {/* <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video> */}
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch} className="search-form">
          <input
            className="search"
            onChange={myRecipeSearch}
            value={mySearch}
          />
          <button onClick={finalSearch}>
            <img
              src="https://img.icons8.com/fluency/48/000000/fry.png"
              alt="icon"
            />
          </button>
        </form>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default App;
