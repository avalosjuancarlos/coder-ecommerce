import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = ({className}) => {

    const {cart, addToCart, isInCart, cartSize } = useContext(CartContext);

    const cartRender = () => (
        <ul>{cart.map((item, index) => <li key={index}> {item.id} - {item.description} - {item.amount}</li>)}</ul>
    )

    return (<div className={className}>
        {cartSize === 0 ? <p>Carrito Vacio</p> :  cartRender()}
        
    </div>);
}

export default Cart;