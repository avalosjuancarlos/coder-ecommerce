import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useHistory, useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";

const Home = ({className, greeting}) => {
    const [listItems, setListItems] = useState([]);
    const {categoryId} = useParams();

    let history = useHistory();

    const categorySelected = (e) => {
        e.preventDefault();
        const id = e.target.value;
        if(id === ""){
            history.push("/");
        } else {
            history.push("/categories/"+ id);
        }
    };

    useEffect(()=> {
        const db = getFirestore();
        let itemCollection;

        if(categoryId){
            itemCollection = db.collection("items").where('categoryId', '==', categoryId);
        } else {
            itemCollection = db.collection("items").limit(20);
        }

        const unsubscribe = itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No results!");
            }
            setListItems(querySnapshot.docs.map(doc => {
                return {id:doc.id, ...doc.data()};
            }));
        }).catch((error) => {
            console.log("Error searching items", error);
        });

        return unsubscribe;

    }, [categoryId]);

    if(categoryId){
        return (<div className={className}>
            {
                listItems.length === 0 ? 
                    <p>Buscando productos ...</p>
                :
                    <ItemList data={listItems} />
            }
            </div>);    
    }

    return (
        <>
        {
            listItems.length === 0 ? 
            <div className={className}>
                <p>Buscando productos ...</p>
            </div>
            :
            <div className={className}>
            <p>
                <select onChange={categorySelected}>
                    <option value="">TODAS</option>
                    <option value="0000000001">camperas</option>
                    <option value="0000000002">conjuntos</option>
                    <option value="0000000003">buzos</option>
                </select>
                </p>
                <ItemList data={listItems} />
            </div>
        }
        </>
    );
};

export default Home;