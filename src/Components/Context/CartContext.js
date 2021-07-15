import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

 
  const AddItem = (item, quantity) => {

  const index = items.findIndex(item => item.item.id === item.id)

    if (index >= 0) {
      quantity += items[index].quantity
    }

    if (quantity > item.stock) {
      alert('No hay suficiente stock')
    } else {
      if (index === -1) {
        items.push({
          item: item,
          quantity: quantity,
        })
      } else {
        items[index].quantity = quantity
      }

      setItems([...items]);
      setTotal(total + item.price*quantity);
    }
  }

  //Remove
  const RemoveItem = (itemToRemove) => {
    console.log(itemToRemove);
    const newItems = Array.from(items);
    const positionToRemove = newItems.findIndex((i) => i.item.id === itemToRemove.item.id);
    console.log(positionToRemove);
    setTotal(total - newItems[positionToRemove].item.price * newItems[positionToRemove].quantity);
    newItems.splice(positionToRemove, 1);
    setItems(newItems);
  }

  //Clear
  const Clear = () => {
    setItems([]);
    setTotal(0);
  }


  return (
    <CartContext.Provider value={{ items, AddItem, Clear, RemoveItem, total }}>
      {props.children}
    </CartContext.Provider>
  )
}