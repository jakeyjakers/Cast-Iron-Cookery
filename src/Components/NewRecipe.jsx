import React, {useState, useRef, useContext} from 'react'
import AuthContext from '../Store/AuthContext'
import axios from 'axios'
import {Formik} from 'formik'
import { CASTIRON_COOKERY_API } from '../Store/Config'
import './NewRecipe.css'


const NewRecipe = () => {

    const {token, userId} = useContext(AuthContext)

    const nameRef = useRef()
    const amountRef = useRef()
    const [ingredients, setIngredients] = useState([])
    const [indgredientAmount, setIngredientAmount] = useState([])
    
    //const [instructions, setInstructions] = useState()
    
    const addIngredient = () => {
       
        setIngredients([...ingredients, nameRef.current.value])
        setIngredientAmount([...indgredientAmount, amountRef.current.value])
        nameRef.current.value = ''
        amountRef.current.value = ''
        nameRef.current.focus()
    }

   // for pic, when i figure that out const [] = useState()


    let initialValues = {
        title: '',
        time: '',
        ingredients: [],
        amount: [],
        instructions: '',
        //imageURL
    }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    values.amount = indgredientAmount
    console.log(values)

    axios.post(`${CASTIRON_COOKERY_API}/addrecipe`, values, userId, {
        headers: {
            authorization: token
        }
    })
    .then((response) => {
        console.log(response.data)

    }).catch((error) => {
        console.log(error)
        console.log(`whoops, error in newrecipe.js promise`)
    })
  }

    const ingredientDisplay =ingredients.map((item, index) => {
        return (
            <li>{item}</li>
        )
       })

    const ingredientAmountDisplay =indgredientAmount.map((item, index) => {
    return (
        <li>{item}</li>
    )
    })
        

  return (
    <div className='form__container'>
        <h2>Please submit a recipe for everyone to enjoy!</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>{({values, handleChange, handleSubmit}) => (
                 <form className='recipe__form' onSubmit={handleSubmit}>
                 <input type='text' placeholder='recipe title' name='title' value={values.title} onChange={handleChange}/>
                 <input type='text' placeholder='time'name='time'value={values.time} onChange={handleChange}/>
                 {/* <input type='text' placeholder='how many people does this serve' name={serves} value={values.serves} onChange={handleChange}/> */}
                 <input type='text' placeholder='ingredients' name='ingredients'ref={nameRef}/>
                 <input type='number' placeholder='amount' name='amount' ref={amountRef}/>
                 <button onClick={addIngredient} type='button' >Add Ingredients</button>
                 {/* <button onClick={addIngredient}  type='button'>Add Amount</button> */}
                 <ul>
                    {ingredientDisplay}
                    {ingredientAmountDisplay}
                 </ul>
                 <textarea placeholder='instructions' name='instructions' value={values.instructions} onChange={handleChange}></textarea>
                 {/* <input type='image' placeholder='recipe image' name='imageURL'/> */}
                 <button type='submit'>Submit Recipe</button>
             </form>
        )}</Formik>
       
    </div>
  )
}

export default NewRecipe