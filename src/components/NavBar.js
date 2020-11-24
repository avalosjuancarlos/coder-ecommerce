import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import './NavBar.css';

const NabBar = () => (
  <ul className="navigation">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/products">Products</Link></li>
    <li><Link to="/cart">Cart <CartIcon/></Link></li>
    <li><Link to="/">About</Link></li>
  </ul>
)

export default NabBar;