import React from "react";
import CartIcon from "./CartIcon";
import './NavBar.css';

const NabBar = () => (
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Cart <CartIcon/></a></li>
    <li><a href="#">About</a></li>
  </ul>
)

export default NabBar;