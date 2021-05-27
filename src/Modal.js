import React from 'react'

export default function Modal(props) {

const {closeModal} = props;
const modal = document.querySelector(".container");
const info = props;
console.log(info);

function outsideClick(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

    return (
        <div onClick = {outsideClick} className="container hide">
            <div className="modal">
                <button onClick = {closeModal} id="close">X</button>
                <h1>{info.name}</h1>
                <p>{info.category}</p>
                <h3>{info.alc}</h3>
                <img src="" alt="label goes here"></img>
                    <div className="description">{info.description}
                    <p>{info.aroma}Aroma</p>
                    <p>{info.appearance}Appearance</p>
                    <p>{info.flavor}Flavor</p>
                    <p>{info.mouthfeel}Mouthfeel</p>
                    <p>{info.overllImpression}OverallImpression</p>
                    </div>
            </div>
            
        </div>
    )
}
