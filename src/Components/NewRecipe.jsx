import React, {useState} from 'react'
import axios from 'axios'
import {Formik} from 'formik'
import './NewRecipe.css'


const NewRecipe = () => {

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [indgredientAmount, setIngredientAmount] = useState([])
    const [instructions, setInstructions] = useState()
   // for pic, when i figure that out const [] = useState()

    const submitHandler = () => {

        let initialValues = {
            title: '',
            time: '',
            serves: '',
            ingredients: [],
            amount: [],
            instructions: '',
            //imageURL
        }

    }

    const addIngredients = () => {
        return (
            <li></li>
            
        )
    }

  return (
    <div className='form__container'>
        <h2>Please submit a recipe for everyone to enjoy!</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>{({values, handleChange, handleSubmit}) => { 
                 <form className='recipe__form' onSubmit={handleSubmit}>
                 <input type='text' placeholder='recipe title' name='title' value={values.title} onChange={handleChange}/>
                 <input type='text' placeholder='time'name='time'value={values.time} onChange={handleChange}/>
                 <input type='text' placeholder='how many people does this serve' name={serves} value={values.serves} onChange={handleChange}/>
                 <input type='text' placeholder='ingredients' name='ingredients'value={values.ingredients} onChange={handleChange}/>
                 <input type='number' placeholder='amount' name='number'value={values.amount} onChange={handleChange}/>
                 <button onClick={addIngredients}>Add Ingredients</button>
                 <ul>test list</ul>
                 <textarea placeholder='instructions' name='instructions' value={values.instructions} onChange={handleChange}></textarea>
                 {/* <input type='image' placeholder='recipe image' name='imageURL'/> */}
                 <button onClick={submitHandler}>Submit Recipe</button>
             </form>
        }}</Formik>
       
    </div>
  )
}

export default NewRecipe