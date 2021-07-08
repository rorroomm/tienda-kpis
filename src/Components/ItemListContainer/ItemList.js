import React, { useState, useEffect } from "react";
import './Item.css';
import Item from './Item';
import axios from 'axios';
import { Link } from "react-router-dom";
import { db } from '../../firebase';

export const ItemList = () => {
  const [dataToShow, setDataToShow] = useState([]);

//Llamada firebase
  const getItems = () => {
		db.collection('items').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			setDataToShow(docs);
		});
	};
	useEffect(() => {
		getItems();
	}, []);


  //const miData = () => {
    //setTimeout(
      //() => axios('./data.json').then((res) => setDataToShow(res.data)), 2000);
  //};
  
 // useEffect(() => {
   // miData(); 
	//}, []);

  return (
    <>
      {dataToShow.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
    
          <ul className="cards">
            {dataToShow.filter((element) => element.destacado)
             .map((element) => (
              <Link to={`/detail/${element.idProducto}`} key={element.id}>
                <Item key={element.id}
                      name={element.name}
                      category={element.category}
                      imgUrl={element.imgUrl}
                      stock={element.stock}>
                </Item>
              </Link>
            ))}
          </ul>

        </>
      )}
    </>
  );
};

export default ItemList;