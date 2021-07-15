import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from '../../firebase';

function Checkout() {
  const { items, total } = useContext(CartContext);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState('');

  const onHandleNameChange = (e) => {
    let aux_user = user;
    aux_user.name = e.target.value;
    setUser(aux_user);
  };

  const onHandleEmailChange = (e) => {
    let aux_user = user;
    aux_user.email = e.target.value;
    setUser(aux_user);
  };

  const onHandlePhoneChange = (e) => {
    let aux_user = user;
    aux_user.phone = e.target.value;
    setUser(aux_user);
  };

  const addOrEdit = async (object) => {
    const newOrder = await db.collection('orders').add(object);
    setOrder(newOrder.id);
};

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: items,
      date: new Date(),
      total: total
    };
    addOrEdit(order);
  };




  return (
    <>
    {order != '' ? (
        <div>
      <h1>Su compra por un total de {total} se procesó correctamente</h1>
      <h2>Enviamos un email a la casilla {user.email} con el detalle</h2>
      <h3>Su código de compra es {order}</h3>
      </div>
    ) : (
    <>
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card-container">
          <h4>
            Estas comprando {items.length} productos por un total de {total}€
          </h4>
        </div>
      </div>
      <h3>Purchase request form</h3>
      <form onSubmit={onHandleSubmit}>
        <h4> Contact Information</h4>
        <br></br>
        <input
          placeholder="email"
          name="email"
          onChange={onHandleEmailChange}
        ></input>
        <br></br>
        <input
          placeholder="name"
          name="name"
          onChange={onHandleNameChange}
        ></input>
        <br></br>
        <input
          placeholder="phone"
          name="phone"
          onChange={onHandlePhoneChange}
        ></input>

        <h4>Payment</h4>
        <input placeholder="card number"></input>
        <br></br>
        <input placeholder="name on card"></input>
        <br></br>
        <input placeholder="expiration date"></input>
        <br></br>
        <input placeholder="security code"></input>
        <br></br>
        <button type="submit">Pay now</button>
      </form>
    </div>
                
      </>
    )}
    </>

  );
}

export default Checkout;
