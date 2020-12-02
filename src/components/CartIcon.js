import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../context/CartContext";

const CartIcon = () => {
    const {cart, addToCart, isInCart, cartSize } = useContext(CartContext);

    return <span><FaCartPlus/> {cartSize}</span>;
};

export default CartIcon;