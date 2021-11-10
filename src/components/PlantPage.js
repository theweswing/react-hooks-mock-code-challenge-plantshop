import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({activePlants,setActivePlants,allPlants,setAllPlants}) {
// The two states and their setter functions being passed to the child components, where the work is being done
// I feel like technically we're supposed to build the filters in the parent and pass those functions downward?
// But that has never made full sense to me honestly lmao

return (
    <main>
      <NewPlantForm activePlants={activePlants} setActivePlants={setActivePlants} allPlants={allPlants} setAllPlants={setAllPlants}/>
      <Search activePlants={activePlants} setActivePlants={setActivePlants} allPlants={allPlants} setAllPlants={setAllPlants} />
      <PlantList activePlants={activePlants} setActivePlants={setActivePlants}  />
    </main>
  );
}

export default PlantPage;
