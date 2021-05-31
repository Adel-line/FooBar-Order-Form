import CreditCardInput from 'react-credit-card-input';

export default function Pmethod (props) {
    console.log(props.methodP);
    if(props.methodP==="Credit card") {
        return (
            <div className="payementInformation ">
                <h1>Payement Information</h1>
                <div>
                    <label className="payementLabel" for="namePayement">Full Name </label>
                    <input id="namePayement" type="text" placeholder="Jhon Doe"></input>
                </div>
                <div >
                <label className="payementLabel">Card Information </label>
                <CreditCardInput/>
                </div>
                
                
            </div>
        )
    }else if(props.methodP==="cash") {
        return (
            <div>
                <p>ph</p>
                <input></input>
            </div>
        )
    }else  {
        return (
            <div>
                <p>hh</p>
                <input></input>
            </div>
        )
    }
    
}