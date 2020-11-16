import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";

const getMockData = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve(mockData);
    }
    , 2_000);
});

const Home = ({className, greeting}) => {
    const [listItems, setListItems] = useState([]);

    useEffect(()=> {
        getMockData.then(result => {
            setListItems(result);
        });
    }, []);

    const onAddItem = (amount) => {
        alert(`Se agregaron ${amount} items`);
    }

    return (<div >
        {/* <h1 className={className}>{greeting }</h1>
        <br />
        <ItemCount className={className}  onAdd={onAddItem} />
        <br />
        <div className={className}>
        {
            listItems.length == 0 ? 
                <p>No hay items a mostrar</p>
            :
                <ItemList data={listItems} />
        }
        </div> */}
        <br />
        <div className={className}>
            <ItemDetailContainer />
        </div>
    </div>);
};

export default Home;

const mockData = [
    { 
        id: "00000000001", 
        name: "notebook", 
        description: "notebook de 14 pulgadas", 
        stock: 100 
    },
    { 
        id: "00000000002", 
        name: "monitor", 
        description: "Monitor de 21 pulgadas", 
        stock: 100 
    },
    { 
        id: "00000000003", 
        name: "mouse", 
        description: "mouse optico de dos botones", 
        stock: 100 
    },
];