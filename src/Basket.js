import React from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;

    // Money calculations
    let itemsPrice =[];
    let subtotal = 0;
    cartItems.forEach((item) => {
    let itemName = ( item.price * item.amount);

    itemsPrice.push(itemName);
    }
    );

    itemsPrice.forEach((item) => {
        subtotal = subtotal + item;

    })

    const taxPrice = subtotal* 0.12;
    const totalPrice = subtotal + taxPrice;

   
    return (
        <section className="cart">
            <div className="items">
                <h1>ORDER</h1>
                <img alt="this is a cart" className="icon" src="./cart.png"></img>
            </div>
            <div>
                {cartItems.length === 0 && <div>Order is empty</div>}
            </div>
            <div className="itemsHolder">
                {cartItems.map((item) => (
                    <BasketItem
                    key={item.id}
                    {...item}
                    onAdd={onAdd}
                    onRemove={onRemove}/>
                ))}
            </div>
            <div className="extra">
                <input type="text" placeholder="extra..."></input>
            </div>

            <div className="total">
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col1">Items Price</div>
                            <div className="col2">{subtotal}dkk</div>
                        </div>

                        <div className="row">
                            <div className="col1">Tax Price</div>
                            <div className="col2">{taxPrice}dkk</div>
                        </div>

                        <div className="row">
                            <div className="col1"><strong>Total</strong></div>
                            <div className="col2">{totalPrice}dkk</div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )

}