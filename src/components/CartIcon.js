import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../context/CartContext";

const CartIcon = () => {
    const {cart, addToCart, isInCart, cartSize, cartCount } = useContext(CartContext);

    return <span><FaCartPlus/> {cartCount}</span>;
};

export default CartIcon;