import React, { Fragment } from "react";
import Cobbler from "../../StockPhotos/Cobbler-Image.jpg";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe, displayState, recipeFav, deleteRecipe}) => {
  // console.log(recipe);

  const navigator = useNavigate();
  
  const detailHandler = () => {
    navigator(`/recipe/${recipe.id}`);
  };

  return (
    <Fragment>
      {displayState ? (
        <div className="recipe__card">
          <img src={recipe.image} className="recipe__img" />
          <h2 key={recipe.id} id={recipe.id}>
            {recipe.title}
          </h2>
          <button onClick={detailHandler}>See Recipe</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
        </div>
      ) : (
        <div className="recipe__card">
          <img src={Cobbler} className="recipe__img" />
          <h2 key={recipeFav.id} id={recipeFav.id}>
            {recipeFav.title}
           
          </h2>
          <button onClick={detailHandler}>See Recipe</button>
        </div>
      )}
    </Fragment>
  );
};

export default RecipeCard;
