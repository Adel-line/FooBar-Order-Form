import React from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;

    // Money calculations

    // const itemsPrice = cartItems.reduce((a, c) => a+c.price * c.qty, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const totalPrice = itemsPrice + taxPrice;

    console.log(onAdd);
   
    return (
        <section className="cart">
            <div className="items">
<img alt="this is a cart" src="./cart.png"></img>
<h1>2<span>items</span></h1>
</div>
<div>
    {cartItems.length === 0 && <div>Order is empty</div>}
</div>
{cartItems.map((item) => (
    <BasketItem
    key = {item.id}
    {...item}
    {...onAdd}
    {...onRemove}/>
))}
<div className="extra">
<input type="text"></input>
</div>


<div className="total">
{/* <h2>Total:</h2> */}
</div>
        </section>
    )

}