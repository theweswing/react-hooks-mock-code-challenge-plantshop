import React,{useState} from "react";

function PlantCard({name,price,image,id}) {
const [inStock,setInStock]=useState(true)

function handleStock(e){
  setInStock(!inStock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
