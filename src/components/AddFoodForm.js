import React from 'react'
import foods from '../foods.json';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import FoodBox from './FoodBox';

export default function AddFoodForm() {

    const [foodList, setFoodList]= useState(foods)

    const [newFood, setNewFood] = useState({
        name:"",
        image: "",
        calories: "",
        servings: ""
      })

      const handleChange = (event) => {
		
		setNewFood({
			...newFood, // spread operator ES6+ - Object Assign
			id: nanoid(),
		 	[event.target.name]: event.target.value
		})
	}

    const handleSubmit = (event) => {
		
		event.preventDefault() // DETENER LA RECARGA DE PÁGINA

		setFoodList([
			...foodList,
			newFood
		])

		setNewFood({
			name:"",
      image: "",
      calories: "",
      servings: ""
		})

		

	}

  return (
    <>
        <h1>Add Food</h1>
      
      <form onSubmit={

        (evt) => { handleSubmit(evt) }

        }>

        <label>Name</label>
        <input
            name="name"
            value={newFood.name}
            onChange={ evt => { handleChange(evt) }}
          />

        <label>Image</label>
        <input
          name="image"
          value={newFood.image}
          onChange={ evt => { handleChange(evt) }}
        />

        <label>Calories</label>
        <input
          name="calories"
          value={newFood.calories}
          onChange={ evt => { handleChange(evt) }}
        />

        <label>Servings</label>
        <input
          name="servings"
          value={newFood.servings}
          onChange={ evt => { handleChange(evt) }}
        />

        <button type="submit">Create Food</button>

      </form>

      <h1>Food List</h1>

        {

        foodList.map((arr,index)=>{
            return (
            <div key={index}>
            <FoodBox food={arr} />
            </div>

            )
          }
         )
        }
    </>
    
    
  )
}


