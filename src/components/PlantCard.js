import React,{useState} from "react";

function PlantCard({name,price,image,id,activePlants,setActivePlants}) {
const [inStock,setInStock]=useState(true)
const [priceChange,setPriceChange]=useState("")

// Attaches to "In Stock" / "Out of Stock" buttons, flips the the "inStock" state, activating the ternary operator, allowing the buttons to flip
function handleStock(e){
  setInStock(!inStock)
}

// Attaches to the "new price" input, saves input in the "priceChange" state
function handlePriceInput(e){
  setPriceChange(parseInt(e.target.value))
  console.log(priceChange)
}

// Attaches to the "Change Item Price" submit button
// Iterates through our "activePlants" display array, finds current plant, adjusts its price to match the current "priceChange" state from input bar
// Updates "activePlants" state to match our changes
// Then Patches the change through to the JSON db, to make the price change persist
function handlePriceChange(e){
  e.preventDefault()
  const plantsWithAdjustedPrice=[...activePlants].map((givenPlant) => {
    if (givenPlant.name === name){
      givenPlant.price=priceChange
      return givenPlant
    }
    else {
      return givenPlant
    }
  })
  setActivePlants(plantsWithAdjustedPrice)
  fetch(`http://localhost:6001/plants/${id}`,{
    method: "PATCH",
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      price:priceChange
    })
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
}

// Attaches to the "Plant Has Gone Extinct" / Delete Button
// Iterates through our "activePlants" display array, returning all plants but the plant matching our current plant slated for deletion
// Updates "activePlants" state to match our new array
// Uses Fetch DELETE method to remove the deleted item from our JSON db permanently.
function handleDelete(e){
  const plantsMinusDeletedPlant=[...activePlants].filter((givenPlant) => {
    return (givenPlant.name !== name)
  })
  console.log(plantsMinusDeletedPlant)
  setActivePlants(plantsMinusDeletedPlant)
  fetch(`http://localhost:6001/plants/${id}`,{
    method: "DELETE",
    headers: {'Content-Type':'application/json'},
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form>
        <input onChange={handlePriceInput} type="number" placeholder="set new price"></input>
        <button onClick={handlePriceChange} type="submit">Change Item Price</button>
        </form>
      {inStock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Plant Has Gone Extinct</button>
    </li>
  );
}

export default PlantCard;
