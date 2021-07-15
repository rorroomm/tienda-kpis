import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { Button } from "@material-ui/core";

function ItemDetail(props) {
  const [itemsToAdd, setItemsToAdd] = useState(0);
  const { items, AddItem } = useContext(CartContext);

  const onAdd = (e) => {
    AddItem(props, e);
    setItemsToAdd(e);
  };
  return (
    <div>
      <div className="container itemDescription">
        <div className="card-container">
          <div className="image-container">
            <img src={props.imgUrl} alt=""></img>
          </div>
          <div className="card-content">
            <div className="card-name">
              <h4>{props.name}</h4>
            </div>
          </div>
          <div className="card-body">
            <p>{props.category}</p>
          </div>
          <div className="card-body">
            <p style={{ padding: "20px" }}>{props.price}€</p>
          </div>
          {itemsToAdd == 0 && (
            <ItemCount stock={props.stock} initial="1" onAdd={onAdd} />
          )}
          {itemsToAdd > 0 && (
            <div>
              <Link to="/cart">
                <Button variant="outlined">Checkout</Button>
              </Link>
              <Link to="/Shop">
                <Button>Continue shopping</Button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <h2>About</h2>
          <p
            style={{
              padding: "20px",
              textAlign: "justify",
              marginRight: "200px",
            }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
