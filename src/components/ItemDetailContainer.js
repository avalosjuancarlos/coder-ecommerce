import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({className}) => {

    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);
        const unsubscribe = item.onSnapshot((doc) => {
            if(!doc.exists){
                console.log("Item does not exist! :(");
                setItem(undefined);
                return;
            }
            setItem({id:doc.id, ...doc.data()});
        },(error) => {
            console.log("Error searching item id:" + id, error);
        });

        return unsubscribe;
    });

    if(item === undefined) {
        return (<div className={className}>
                    <p>Producto NO encontrado</p>
            </div>);
    }

    return (<div className={className}>
    {
        item == null ? 
            <p>Loading...</p>
        :
            <ItemDetail {...item} />
    }
    </div>);

}

export default ItemDetailContainer;