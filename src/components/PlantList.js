import React from "react";
import PlantCard from "./PlantCard";

function PlantList({activePlants,setActivePlants}) {

  function displayPlants(){
    const plantsToDisplay=[...activePlants].map((givenPlant) => {
      return (<PlantCard activePlants={activePlants} setActivePlants={setActivePlants} key={givenPlant.name} name={givenPlant.name} price={givenPlant.price} image={givenPlant.image} id={givenPlant.id} />)
    })
    return plantsToDisplay
  }
  return (
    <ul className="cards">{displayPlants()}</ul>
  );
}

export default PlantList;
