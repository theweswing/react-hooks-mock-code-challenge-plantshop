import React,{useState,useEffect} from "react";

function NewPlantForm({activePlants,setActivePlants,allPlants,setAllPlants}) {
// sets state of an empty object whose keys match the plant objects in the json db
// this state will hold all of our inputs for our new plant submission
  const[newPlantObj,setNewPlantObj]=useState({
    name:"",
    image:"",
    price:""
  })

  // function attaches to the Name, Image and Price inputs and updates our "newPlantObj" state to match the changes to the input bar
  function handleChange(e){
    setNewPlantObj({
      ...newPlantObj,[e.target.name]:e.target.value})
      console.log(newPlantObj)
  }

  // function attaches to the Add Plant submit button
  // first updates our "activeplants" state to include our "newPlantObj", so our new plant displays immediately
  // then posts the new plant object to the json server so changes persist
  // then clears the form and resets our "newPlantObj" to be blank again
  function handleSubmit(e){
    e.preventDefault()
    const plantsPlusNewPlant=[...activePlants,newPlantObj]
    setActivePlants(plantsPlusNewPlant)
    setAllPlants(plantsPlusNewPlant)
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json' },
        body: JSON.stringify(newPlantObj) })
    .then((r) => r.json())
    .then((data) => console.log(data))
    setNewPlantObj({
      name:"",
      image:"",
      price:""
    })
    e.target.reset()
    }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
