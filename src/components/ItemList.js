import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({data}) => (
<ul style={{listStyleType:"none", backgroundColor:"whitesmoke"}}>
    { data.map((item, index) => (<li style={{textDecoration:"none"}} key={index} ><Link style={{backgroundColor:"whitesmoke"}} to={`/item/${item.id}`}><Item {...item} /></Link></li>))}
</ul>
);

export default ItemList;