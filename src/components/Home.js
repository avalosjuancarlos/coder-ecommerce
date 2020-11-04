import React from "react";
import ItemCount from "./ItemCount";

const onAddItem = (amount) => {
    alert(`Se agregaron ${amount} items`);
}

const Home = ({className, greeting}) => (
    <div >
        <h1 className={className}>{greeting }</h1>
        <br />
        <ItemCount className={className}  onAdd={onAddItem} />
    </div>
);

export default Home;