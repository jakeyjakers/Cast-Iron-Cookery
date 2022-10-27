import React, { Fragment } from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({
  recipe,
  displayState,
  recipeFav,
  deleteRecipe,
  isDelete,
}) => {
  const navigator = useNavigate();

  const detailHandler = (id) => {
    navigator(`/recipe/${id}`);
  };

  console.log(recipe, recipeFav);

  return (
    <Fragment>
      {displayState ? (
        <div className="recipe__card">
          <img src={recipe.image} className="recipe__img" />
          <h2 key={recipe.id} id={recipe.id}>
            {recipe.title}
          </h2>
          <button onClick={() => detailHandler(recipe.id)}>See Recipe</button>
          {isDelete ? (
            <button onClick={() => deleteRecipe(recipe.id)}>
              Delete Recipe
            </button>
          ) : null}
        </div>
      ) : (
        <div className="recipe__card">
          <img src={recipeFav.image} className="recipe__img" />
          <h2 key={recipeFav.id} id={recipeFav.id}>
            {recipeFav.title}
          </h2>
          <button onClick={() => detailHandler(recipeFav.id)}>
            See Recipe
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default RecipeCard;
