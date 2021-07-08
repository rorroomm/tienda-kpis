import React, { useState } from "react";
import { Button } from '@material-ui/core';

function ItemCount({stock, initial, onAdd}) {

  const [number, setNumber] = useState(parseInt(initial));

  const handleUp = () => {
    // console.log("Hiciste Click");
    if (number < parseInt(stock)) {
      setNumber(number + 1);
    } else {
      alert('El stock de este artículo es: ' + stock);
    }
  };

  const handleDown = () => {
      if (number > 0) {
        setNumber(number - 1);
      }
   
  };

  return (
    <div>
      <div>
      <p>{number}</p>
      <Button onClick={handleDown} variant="outlined">-</Button>
      <Button onClick={handleUp} variant="outlined">+</Button>
      </div>
      <div>
      <Button onClick={()=>onAdd(number)} variant="outlined">Add to cart</Button>

      </div>
    </div>
  );
}

export default ItemCount;