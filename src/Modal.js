import React from 'react'

export default function Modal(props) {

const {closeModal} = props;
const modal = document.querySelector(".container");

const {info} = props;
let infoModale = "" ;


console.log(props.readM);
console.log(props);

function outsideClick(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

if (props.readM ) {
    if (props.readM === "ElHefe" ) {
        infoModale = info[0];
    }else if (props.readM === "FairyTaleAle") {
        infoModale = info[1];
    }else if (props.readM === "GitHop") {
        infoModale = info[2];
    }else if (props.readM === "HollabackLager") {
        infoModale = info[3];
        infoModale.label = "hollabackLager.png" ;
    }else if (props.readM === "HoppilyEverAfter") {
        infoModale = info[4];
    }else if (props.readM === "Mowintime") {
        infoModale = info[5];
    }else if (props.readM === "Row26") {
        infoModale = info[6];
    }else if (props.readM === "RuinedChildhood") {
        infoModale = info[7];
    }else if (props.readM === "Sleighride") {
        infoModale = info[8];
    }else if (props.readM === "Steampunk") {
        infoModale = info[9];
    }
return (
    <div onClick = {outsideClick} className="container">
        <div className="modal ">
            <button onClick = {closeModal} id="close">X</button>
            <h1>{infoModale.name}</h1>
            <p>{infoModale.category}</p>
            <h3>{infoModale.alc}</h3>
            <img className ="modalImage" src={infoModale.label} alt="label goes here"></img>
            <div className="description">
            <p>{infoModale.description.aroma}</p>
            <p>{infoModale.description.appearance}</p>
            <p>{infoModale.description.mouthfeel}</p>
            <p>{infoModale.description.overllImpression}</p>
                
            </div>
        </div>
            
    </div>
) 
} else {
    return (
        <div onClick = {outsideClick} className="container">
            <div className="modal ">   
                <p>Loading...</p>
                    

            </div>
                
        </div>
    )
}



}
