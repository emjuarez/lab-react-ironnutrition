import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { nanoid } from 'nanoid';



function App() {

  const [foodList, setFoodList]= useState(foods)

  // const [newFood, setNewFood] = useState({
  //   name:"",
  //   image: "",
  //   calories: "",
  //   servings: ""
  // })

  // const handleChange = (event) => {
		
	// 	setNewFood({
	// 		...newFood, // spread operator ES6+ - Object Assign
	// 		id: nanoid(),
	// 	 	[event.target.name]: event.target.value
	// 	})
	// }

  // const handleSubmit = (event) => {
		
	// 	event.preventDefault() // DETENER LA RECARGA DE PÁGINA

	// 	setFoodList([
	// 		...foodList,
	// 		newFood
	// 	])

	// 	setNewFood({
	// 		name:"",
  //     image: "",
  //     calories: "",
  //     servings: ""
	// 	})

		

	

  return (
    
    <>

      
      
      <AddFoodForm/>

      
      <h1>Food List</h1>

     

    </>
   

  );
}

export default App;