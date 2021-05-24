import Pmethod from "./pmethod";
import {useState} from "react";
export default function Payment () {

    const [methodP, setMethodP] = useState("Credit card");
    function changemethod (vala){
        let valau = document.querySelector("#selectionar").value
        console.log(vala);
        console.log(valau);
        /*const nextMethd  = vala;  */
    setMethodP((newmeth) => newmeth=valau);
    }
   /* let vala = document.querySelector("#selectionar").value;*/

    return (
        <fieldset>
            <select  id="selectionar" onChange={()  => changemethod(this)}>
                <option value={"Credit card"}  >Credit card</option>
                <option value={"Mobile Pay"} >Mobile Pay</option>
                <option value={"cash"} >Cash</option>
            </select>
            <Pmethod changemethod={changemethod} methodP={methodP}/>
            

        </fieldset>
    )
}