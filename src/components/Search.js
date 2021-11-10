import React from "react";

function Search({activePlants,setActivePlants,allPlants,setAllPlants}) {

  function handleSearch(e){
    console.log(allPlants)
    const filteredPlants=[...allPlants].filter((givenPlant) => {
      return givenPlant.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setActivePlants(filteredPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
