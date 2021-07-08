import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Item from './Item';
import ShopNavigation from '../Navigation/ShopNavigation';
import { db } from '../../firebase';

function ItemCategoryContainer({match}) {

    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);

    
     //Llamada firebase
  const getItems = () => {
		db.collection('items').where('category','==', itemCategory).get().then((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			setCategory(docs);
		});
	};
	useEffect(() => {
    getItems();
	}, );


    //console.log(itemCategory);
    //useEffect(() => {
      // axios('../data.json').then((res) => setCategory (res.data.filter((element) => element.category == itemCategory)));
    //}, [itemCategory]);
    //console.log(category);
    
    return (
        <>
        {category.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
        <>
        <ShopNavigation className="shopMenu" />
           <ul className="cards">
            {category.map((element) => (
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
      )
}

export default ItemCategoryContainer
