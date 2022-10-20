import React from 'react'
import './NewRecipe.css'


const NewRecipe = () => {

    const submitHandler = () => {

    }

    const addIngredients = () => {
        return (
            <li></li>
            
        )
    }

  return (
    <div className='form__container'>
        <form className='recipe__form'>
            <input type='text' placeholder='recipe title'/>
            <input type='text' placeholder='time'/>
            <input type='text' placeholder='ingredients'/>
            <input type='number' placeholder='amount'/>
            <button onClick={addIngredients}>Add Ingredients</button>
            <ul>test list</ul>
            <textarea placeholder='instructions'></textarea>
            <button onClick={submitHandler}>Submit Recipe</button>
        </form>
    </div>
  )
}

export default NewRecipe