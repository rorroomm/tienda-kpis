import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//VIEWS
import Category from "../Components/ItemListContainer/ItemCategoryContainer";
import ShopNavigation from '../Components/Navigation/ShopNavigation';
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

function Shop() {
    return (
      < div className="App">
        <ShopNavigation />
        <h2 style={{color: '#001326', padding: '19px' }}>Highlights</h2>
        <ItemListContainer></ItemListContainer>
        </div>
    );
  }
  
  export default Shop;
  