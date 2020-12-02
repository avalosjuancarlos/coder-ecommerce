import React, { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue);

    function getItem(id){
        return cart.find(obj => obj.id === id);
    }

    function isInCart(id){
        return id === undefined ? undefined : getItem(id) !== undefined;
    }

    function addToCart(item){
        // Si existe el item en el carrito no lo agregamos para simplificar la lógica
        // Sino deberíamos buscar en que lugar se encuentra y realizar el reemplazo o modificación
        if(isInCart(item && item.id)) {
            return;
        }
        setCart([...cart, item]);
        
    }

    return <CartContext.Provider value={{cart, addToCart, isInCart, cartSize: cart.length }}>
        {children}
    </CartContext.Provider>
}