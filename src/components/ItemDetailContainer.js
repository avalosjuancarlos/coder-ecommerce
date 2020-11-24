import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../repository/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({className}) => {

    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const getMockData = new Promise((resolve, reject)=>{
            setTimeout(()=> {
                // resolve({ 
                //     id: "00000000001", 
                //     name: "notebook", 
                //     description: "notebook de 14 pulgadas", 
                //     stock: 100 
                // });

                resolve(mockData.find(item => item.id === id));
            }
            , 3_000);
        });

        getMockData.then(result => {
            console.log("pasamos por use effect");
            setItem(result);
        });
    });

    return (<div className={className}>
    {
        item == null ? 
            <p>Loading itemId={id}</p>
        :
            <ItemDetail {...item} />
    }
    </div>);

}

export default ItemDetailContainer;