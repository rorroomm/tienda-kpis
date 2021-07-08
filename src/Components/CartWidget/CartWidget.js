import React, {useContext} from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";

function CartWidget() {
    return (
        <div>
            <Link to="/cart">
            <ShoppingCartOutlinedIcon  />
            </Link>
        </div>
    )
}
export default CartWidget;
