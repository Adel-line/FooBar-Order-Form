import CreditCardInput from 'react-credit-card-input';

export default function Pmethod (props) {
    console.log(props.methodP);
    if(props.methodP==="Credit card") {
        return (
            <div className="payementInformation ">
                <h1>Payement Information</h1>
                <div>
                    <label className="payementLabel"  htmlFor="namePayement" >Full Name </label>
                    <input id="namePayement" type="text" name="cardname" placeholder="Jhon Doe" required></input>
                </div>
                <div >
                <label className="payementLabel">Card Information </label>
                <CreditCardInput/>
                </div>
                
                
            </div>
        )
    }else if(props.methodP==="cash") {
        return (
            <div id="cashPaying">
                <p>Please go the to the counter to pay, we will call you when order is ready .</p>
            </div>
        )
    }else  {
        return (
            <div id="mobilePaying">
                <p>Mobile pay code:</p>
                <strong>755566</strong>
            </div>
        )
    }
    
}