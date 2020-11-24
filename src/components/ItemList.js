import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({data}) => (
<ul>
    { data.map((item, index) => (<li key={index} ><Link to={`/item/${item.id}`}><Item {...item} /></Link></li>))}
</ul>
);

export default ItemList;