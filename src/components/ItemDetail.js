import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, categoryId, title, description, image, price, stock }) => {

    const { addToCart } = useContext(CartContext);

    const onAddItem = (amount) => {
        //alert(`Se agregaron ${amount} items`);
        addToCart({id, title, description, price, amount});
    }

    return (
        <div>
        <p>Descripción: {description} </p>
        <p>Valor: {price} </p>
        <p><img src="/images/100020ew4946001-1.jpg" width="150px" height="150px" /></p>
        {/* <img src="/images/100020ew4946001-1.jpg" width="150px" height="150px" />
        <img src="/images/100020gl7498001-1.jpg" width="150px" height="150px" />
        <img src="/images/100020gl7512001-1.jpg" width="150px" height="150px" /> */}

        {/* <img src="/images/100020gl7513001-1.jpg" width="150px" height="150px" />
        <img src="/images/100020gl7516001-1.jpg" width="150px" height="150px" />
        <img src="/images/100020gl7517001-1.jpg" width="150px" height="150px" />
        <img src="/images/100020gl7519001-1.jpg" width="150px" height="150px" />
         */}
        <ItemCount min={1} max={stock} onAdd={onAddItem}  />
        </div>
    );
};

export default ItemDetail;