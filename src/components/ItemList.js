import React from 'react';
import Item from './Item';

const ItemList = ({data}) => (
<ul>
    { data.map((item, index) => (<Item key={index} {...item} />))}
</ul>
);

export default ItemList;