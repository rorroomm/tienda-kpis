import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "@material-ui/core";
import "./cart.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";

function Cart() {
  const { items, AddItem, Clear, RemoveItem, total } = useContext(CartContext);
  return (
    <div>
      {items.length == 0 ? (
        <div>
          Your cart is empty
          <Link to="/Shop">
            <Button>Continue shopping</Button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#001326", padding: "19px" }}>Cart</h2>
          <div className="cartContainer">
            <div>
              <table>
                <tr style={{ color: "black" }}>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Sub-Total</th>
                  <th>Remove</th>
                </tr>
                {items.map((element) => (
                  <tr style={{ height: "60px" }} key={element.item.id}>
                    <td>{element.item.name}</td>
                    <td>{element.quantity}</td>
                    <td>{element.item.category}</td>
                    <td>€ {element.item.price} </td>
                    <td>€ {element.quantity * element.item.price}</td>
                    <td>
                      <DeleteForeverIcon
                        onClick={() => {
                          RemoveItem(element);
                        }}
                        variant="outlined"
                      ></DeleteForeverIcon>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="card-container">
              <h2>Total</h2>
              <p>€{total}</p>
              <Link to="/checkout">
                <Button style={{ padding: "4px" }} variant="outlined">
                  Proceed Checkout
                </Button>
              </Link>
            </div>
          </div>
          <div style={{ marginTop: "200px" }}>
            <Button onClick={Clear} variant="outlined">
              Empty cart
            </Button>
            <Link to="/Shop">
                <Button>Continue shopping</Button>
              </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
