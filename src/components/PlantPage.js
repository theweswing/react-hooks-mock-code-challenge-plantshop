import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({activePlants,setActivePlants,allPlants,setAllPlants}) {

return (
    <main>
      <NewPlantForm activePlants={activePlants} setActivePlants={setActivePlants} allPlants={allPlants} setAllPlants={setAllPlants}/>
      <Search activePlants={activePlants} setActivePlants={setActivePlants} allPlants={allPlants} setAllPlants={setAllPlants} />
      <PlantList activePlants={activePlants} setActivePlants={setActivePlants}  />
    </main>
  );
}

export default PlantPage;
