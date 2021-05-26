import CreditCardInput from 'react-credit-card-input';

export default function Pmethod (props) {
    console.log(props.methodP);
    if(props.methodP==="Credit card") {
        return (
            <div>
                <CreditCardInput/>
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