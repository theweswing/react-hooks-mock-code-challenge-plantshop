import React,{useState,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
// const [allPlants,setAllPlants]=useState([])
const [activePlants,setActivePlants]=useState([])
const [allPlants,setAllPlants]=useState([])

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then((r) => r.json())
  .then((data) => {
    setAllPlants(data)
    setActivePlants(data)
    console.log(allPlants)})
},[])

  return (
    <div className="app">
      <Header />
      <PlantPage allPlants={allPlants} setAllPlants={setAllPlants} activePlants={activePlants} setActivePlants={setActivePlants} />
    </div>
  );
}

export default App;
