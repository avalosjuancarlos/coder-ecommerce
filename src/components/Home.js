import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";

const Home = ({className, greeting}) => {
    const [listItems, setListItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=> {
        const db = getFirestore();
        let itemCollection;

        console.log("categoryId", categoryId);
        if(categoryId){

        console.log("CATEGORY");
            itemCollection = db.collection("items").where('categoryId', '==', categoryId);
        } else {

            console.log("NO categoryId");
            itemCollection = db.collection("items");
        }

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No results!");
            }
            setListItems(querySnapshot.docs.map(doc => {
                return {id:doc.id, ...doc.data()};
            }));
        }).catch((error) => {
            console.log("Error searching items", error);
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