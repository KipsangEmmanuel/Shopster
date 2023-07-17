import React from "react";

function Item({ item, onUpdateItem }) {
 // Add function to handle button click
 function handleAddToCartClick() {
    // console.log("Clicked item:", item)
    // Call onUpdateItem, passing the data returned from the fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            isInCart: !item.isInCart,
        }),
    })
    .then((r) => r.json())
    .then((updatedItem) => onUpdateItem(updatedItem));
 }

 function handleDeleteClick() {
    // console.log(item)
    fetch(`http://localhost:4000/items/${item.id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => console.log("Deleted!"));
 }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      {/* Add the onclick listener */}
      <button 
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
        >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
        </button>
    </li>
  );
}

export default Item;
