import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, categoryId, title, description, stock }) => {

    const {cart, addToCart, isInCart, cartSize } = useContext(CartContext);

    const onAddItem = (amount) => {
        //alert(`Se agregaron ${amount} items`);
        addToCart({id, title, description, amount});
    }

    return (
        <div>
        <p>Id: {id}</p>
        <p>CategoryId: {categoryId}</p>
        <p>Titulo: {title}</p>
        <p>Descripción: {description} </p>
        <p>Stock: {stock}</p>
        <ItemCount min={1} max={stock} onAdd={onAddItem}  />
        </div>
    );
};

export default ItemDetail;