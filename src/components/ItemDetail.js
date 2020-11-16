import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, description, stock }) => {

    const onAddItem = (amount) => {
        alert(`Se agregaron ${amount} items`);
    }

    return (
        <div>
        <p>Id: {id}</p>
        <p>nombre: {name}</p>
        <p>descripción: {description} </p>
        <p>stock: {stock}</p>
        <ItemCount max={stock} onAdd={onAddItem}  />
        </div>
    );
};

export default ItemDetail;