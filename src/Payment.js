export default function Welcome() {
    return (
        <section className="Form">
            {/* <OrderNum /> */}
            <p className="TablesText">Order no. 12345</p>
            <p className="PaymentTitle">Payment Method</p>
            <div>
                <div>CARD</div>
                <div>VISA</div>
                <div>CARD (not available due to COVID-19)</div>
                <div>MobilePay</div>
                <div>Card Number</div>
                <input></input>
                <div>Cardholder Name</div>
                <input></input>
                <div>Expire Date</div>
                <input></input>
                <div>CVV</div>
                <input></input>
            </div>
            <span>
                <input className="Button" type="Submit" value="Proceed with order"></input>
            </span>
        </section>
      );
  }