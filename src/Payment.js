import Pmethod from "./pmethod";
import {useState} from "react";
export default function Payment (props) {

    const [methodP, setMethodP] = useState("Credit card");
    function changemethod (vala){
        let valau = document.querySelector("#selectionar").value
        console.log(vala);
        console.log(valau);
        /*const nextMethd  = vala;  */
    setMethodP((newmeth) => newmeth=valau);
    }
   /* let vala = document.querySelector("#selectionar").value;*/
console.log(props);
    return (
        <fieldset>
            <select  id="selectionar" onChange={()  => changemethod(this)}>
                <option value={"Credit card"}  >Credit card</option>
                <option value={"Mobile Pay"} >Mobile Pay</option>
                <option value={"cash"} >Cash</option>
            </select>
            
            <div className="itemsHolder">
            {props.cartItems.map((item) => (
                    <div id="details" key={item.id}>
                    <p className="pName">{item.name}</p>
                    <p className="pQuant">{item.amount} x {item.price}</p>
                </div>
                
            ))}
            <div className="row Totaling" >
                    <div className="col1"><strong>Total</strong></div>
                    <div className="col2">{props.totalPrice}dkk</div>
                </div>
            </div>
                
               

            <Pmethod  changemethod={changemethod} methodP={methodP}/>
            

        </fieldset>
    )
}