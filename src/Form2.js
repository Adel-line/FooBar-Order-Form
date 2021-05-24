export default function Order() {
    return (
        <section className="cart">
            <div className="items">
<img alt="this is a cart" src="./cart.png"></img>
<h1>2<span>items</span></h1>
</div>
<div className="addfield">
<p>3</p>
<button>-</button>
<button>+</button>
</div>
<div className="extra">
<input type="text"></input>
</div>
<div className="subtotal">
<h2>SubTotal:</h2>
<h2>Include Vat:</h2>
</div>
<div className="total">
<h2>Total:</h2>
{/* <button className="paybtn">PAY</button> */}
</div>
        </section>
    )

}