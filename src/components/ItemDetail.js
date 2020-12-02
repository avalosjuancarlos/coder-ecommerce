import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, description, stock }) => {

    const {cart, addToCart, isInCart, cartSize } = useContext(CartContext);

    const onAddItem = (amount) => {
        //alert(`Se agregaron ${amount} items`);
        addToCart({id, name, description, amount});
    }

    return (
        <div>
        <p>Id: {id}</p>
        <p>nombre: {name}</p>
        <p>descripción: {description} </p>
        <p>stock: {stock}</p>
        <ItemCount min={1} max={stock} onAdd={onAddItem}  />
        </div>
    );
};

export default ItemDetail;