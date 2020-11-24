import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import mockData from "../repository/products";

const Home = ({className, greeting}) => {
    const [listItems, setListItems] = useState([]);



    useEffect(()=> {
        const getMockData = new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(mockData);
            }
            , 2_000);
        });

        getMockData.then(result => {
            setListItems(result);
        });
    }, []);

    return (<div className={className}>
        {
            listItems.length === 0 ? 
                <p>Buscando productos ...</p>
            :
                <ItemList data={listItems} />
        }
        </div>);
};

export default Home;