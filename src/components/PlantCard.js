import React,{useState} from "react";

function PlantCard({name,price,image,id,activePlants,setActivePlants}) {
const [inStock,setInStock]=useState(true)
const [priceChange,setPriceChange]=useState("")


function handleStock(e){
  setInStock(!inStock)
}

function handlePriceInput(e){
  setPriceChange(parseInt(e.target.value))
  console.log(priceChange)
}

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
