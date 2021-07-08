import React from 'react';
import './Item.css';

function Item(props) {
    return (
        <div className='container'>
           <div className='card-container'>
                <div className='image-container'>
                    <img src={props.imgUrl} alt=''></img>
                </div>
                <div className='card-content'>
                    <div className='card-name'>
                        <h4>{props.name}</h4>
                    </div>
                </div>
                <div className='card-body'>
                    <p>{props.category}</p>
                </div>
                <div className='button'>
                </div>
            </div>
        </div>
    )
}

export default Item;

