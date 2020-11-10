import React from 'react';

const Item = ({id, name, description, stock}) => (
    <div style={{padding:10}}>
        Id: {id}, Name: {name}, description: {description}, stock: {stock}
    </div>
);

export default Item;