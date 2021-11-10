import React,{useState,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [activePlants,setActivePlants]=useState([])
const [allPlants,setAllPlants]=useState([])

// initial fetch of data
// two states, "activePlants" is the currently displayed plants
// "allPlants" is the master list of all plants

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
