import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Cart = ({className}) => {

    const {cart, cartCount, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [compraDeshabilitada, setCompraDeshabilitada] = useState(true);
    const [buyer, setBuyer] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const items = cart.map(obj => ({id:obj.id, title: obj.title, price: obj.price, qty: obj.amount}));
        const total = cart.reduce((prev, obj) => ( prev +=  (obj.amount * obj.price)), 0);
        const order = {
            buyer: {name: buyer.nombre + " " + buyer.apellido, phone: buyer.telefono, email: buyer.email}, 
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        };

        createOrder(order);
    }

    const createOrder = (order) => {
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(order).then(({id}) => {
            setOrderId(id);
            updateProducts(order.items);
            clearCart();
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

    const handleChange = (e) => {
        e.persist(); // persist the event
        const id = e.target.id;
        const value = e.target.value;

        setBuyer((curBuyer) => {
                
            if(!value || value.trim() === ""){
                    setCompraDeshabilitada(true);
            } else {
                if(id === "verificarEmail") { 
                    setCompraDeshabilitada(curBuyer.email != value);
                } else if(id === "email") { 
                    setCompraDeshabilitada(value != curBuyer.verificarEmail);
                } else if(curBuyer.verificarEmail != curBuyer.email) {
                    setCompraDeshabilitada(true);
                } else {
                    setCompraDeshabilitada(false);
                }
            }

            return {
                ...curBuyer,
                [id]: value,
                };
        });
    }

    const cartRender = () => (
        <div>
            <div>
                <ul style={{listStyleType:"none", backgroundColor:"whitesmoke"}}>{cart.map((item, index) => <li style={{backgroundColor:"whitesmoke"}} key={index}> {item.id} - {item.description} - {item.price} - {item.amount}</li>)}</ul>
            </div>
            <div className={className}>
            <form onSubmit={handleSubmit} >
                <label style={{width:140}}>Nombre</label><input type="text" id="nombre" onChange={handleChange} /><br/>
                <label style={{width:140}}>Apellido</label><input type="text" id="apellido" onChange={handleChange} /><br/>
                <label style={{width:140}}>Teléfono</label><input type="tel" id="telefono" onChange={handleChange} /><br/>
                <label style={{width:140}}>Email</label><input type="email" id="email" onChange={handleChange} /><br/>
                <label style={{width:140}}>Verificar Email</label><input type="email" id="verificarEmail" onChange={handleChange} /><br/>
                <br/>
                <button type="submit" disabled={compraDeshabilitada} >Realizar Compra</button>  
            </form>
            </div>
        </div>
    )

    return (<div className={className}>
        {cartCount === 0 ? <p>Carrito Vacio<br/> <Link to="/">Ver listado de productos</Link> </p> :  cartRender()}
        
    </div>);
}

export default Cart;