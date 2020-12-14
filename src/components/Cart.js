import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Cart = ({className}) => {

    const {cart, cartCount } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const buyOnClick = (e) => {
        e.preventDefault();
        // { buyer: { name, phone, email }, items: [{id, title, price}], total  }
        const items = cart.map(obj => ({id:obj.id, title: obj.title, price: obj.price, qty: obj.amount}));
        const total = cart.reduce((prev, obj) => ( prev +=  (obj.amount * obj.price)), 0);
        const order = {buyer: {name: "juan", phone: "1234", email: "test@test.ar"}, items: items, total: total};

        createOrder(order);
    }

    const createOrder = (order) => {
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(order).then(({id}) => {
            setOrderId(id);
            updateProducts(order.items);
            alert("Su compra ha sido exitosa!!!! Se ha generado la orden: " + id);
        }).catch(error => {
            console.log(error);
        });
    };

    const updateProducts = async (items) => {
        const db = getFirestore();
        const itemsToUpdate = db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];
        query.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >=  items[idx].qty){
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].qty});
            } else {
                outOfStock.push({...docSnapshot.data(), id: docSnapshot.id});
            }
        });

        if(outOfStock === 0) {
            await batch.commit();
        } else {
            // Por el momento igual hacemos el commit. 
            // Hay que ver la forma de no terminar la compra e informarle al usuario que no hay stock
            await batch.commit();
        }
    }

    const cartRender = () => (
        <div>
        <ul>{cart.map((item, index) => <li key={index}> {item.id} - {item.description} - {item.price} - {item.amount}</li>)}</ul>
        <p>
        <button onClick={buyOnClick}  name="btn_buy" id="btn_buy" >COMPRAR</button>
        </p>
        </div>
    )

    return (<div className={className}>
        {cartCount === 0 ? <p>Carrito Vacio<br/> <Link to="/">Ver listado de productos</Link> </p> :  cartRender()}
        
    </div>);
}

export default Cart;