import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    <CartProvider >
    <BrowserRouter>
      <div>
        <div className="d-flex justify-content-center">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home className="d-flex justify-content-center" />
          </Route>
          <Route exact path="/products">
            <Home className="d-flex justify-content-center" />
          </Route>
          <Route path="/item/:id" >
            <ItemDetailContainer className="d-flex justify-content-center" />
          </Route>
          <Route path="/cart" >
            <Cart className="d-flex justify-content-center"  />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
