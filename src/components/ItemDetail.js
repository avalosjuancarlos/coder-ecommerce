import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, categoryId, title, description, price, stock }) => {

    const { addToCart } = useContext(CartContext);

    const onAddItem = (amount) => {
        //alert(`Se agregaron ${amount} items`);
        addToCart({id, title, description, price, amount});
    }

    return (
        <div>
        <p>Id: {id}</p>
        <p>CategoryId: {categoryId}</p>
        <p>Titulo: {title}</p>
        <p>Descripción: {description} </p>
        <p>Valor: {price} </p>
        <p>Stock: {stock}</p>
        <ItemCount min={1} max={stock} onAdd={onAddItem}  />
        </div>
    );
};

export default ItemDetail;