import React from 'react';

const Item = ({id, categoryId, title, stock}) => (
    <div style={{padding:10}}>
        Id: {id}, categoryId: {categoryId}, title: {title}, stock: {stock}
    </div>
);

export default Item;