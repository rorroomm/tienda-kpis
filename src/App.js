import React from 'react';
import './App.css';
//VIEWS
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Shop from "./Views/Shop";
//Componentes
import Header from './Components/Header/Header'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer'
import ItemCategoryContainer from './Components/ItemListContainer/ItemCategoryContainer';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Context
import { CartProvider } from './Components/Context/CartContext';

function App () {

  return (
    <CartProvider>
      <Router>
        < div className="App">
          <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Shop" component={Shop} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/detail/:id" component={ItemDetailContainer} />
                <Route path="/category/:id" component={ItemCategoryContainer} />
                <Route path="/cart" component={Cart} />
                <Route path="/Checkout" component={Checkout} /> 
            </Switch>
          </div>
      </Router>
    </CartProvider>
    );
  }

export default App;

