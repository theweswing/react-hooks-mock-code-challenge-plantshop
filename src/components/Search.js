import React from "react";

function Search({activePlants,setActivePlants,allPlants,setAllPlants}) {


  // Filters through our "master list" of all plants, returning only plants whose name includes the search input
  // Uses "master list" because if it filtered through active plants, it would not go back to being a full list as you delete search input
  // you'll notice it uses .toLowerCase and .includs for user convenience! No shift key required, no exact matches required!

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
