import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const getMockData = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve({ 
                id: "00000000001", 
                name: "notebook", 
                description: "notebook de 14 pulgadas", 
                stock: 100 
            });
        }
        , 3_000);
    });

    const [item, setItem] = useState(null);

    useEffect(()=> {
        getMockData.then(result => {
            setItem(result);
        });
    }, []);

    return (<>
    {
        item == null ? 
            <p>Loading</p>
        :
            <ItemDetail {...item} />
    }
    </>);

}

export default ItemDetailContainer;