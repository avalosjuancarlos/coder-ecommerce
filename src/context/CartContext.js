import React, {useState} from "react";

const CartContext = React.createContext([]);

export default CartContext;

export function CartProvider({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue);
    const [count, setCount] = useState(0);

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
        setCart(prevState => {
            setCount(cartCount() + item.amount);
            return [...cart, item]}
            );
    }

    function cartCount() {
        if(cart.length === 0) return 0;
        let count = 0;
        const clone = [...cart];
        count = clone.reduce(function (acc, obj) { return acc + obj.amount; }, 0);
        return count;
    }

    return <CartContext.Provider value={{cart, addToCart, isInCart, cartSize: cart.length, cartCount: count }}>
        {children}
    </CartContext.Provider>
}