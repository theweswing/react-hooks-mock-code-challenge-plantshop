import React,{useState,useEffect} from "react";

function NewPlantForm({activePlants,setActivePlants,allPlants,setAllPlants}) {
  const[newPlantObj,setNewPlantObj]=useState({
    name:"",
    image:"",
    price:""
  })

  function handleChange(e){
    setNewPlantObj({
      ...newPlantObj,[e.target.name]:e.target.value})
      console.log(newPlantObj)
  }

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
