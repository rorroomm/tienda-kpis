import React from 'react';

const btnStyles = {
    fontSize: 18,
    backgroundColor: "blue",
    color: "white",
    margin: 5,
};

function BtnComponent({title}) {
    return (
        <button style={btnStyles}>{title}</button>
    )
};

export default BtnComponent;
