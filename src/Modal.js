import React from 'react'

export default function Modal(props) {

const {closeModal} = props;
const modal = document.querySelector(".container");
const info = props;

function outsideClick(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

    return (
        <div onClick = {outsideClick} className="container hide">
            <div className="modal">
                <button onClick = {closeModal} id="close">X</button>
                <h1>Name</h1>
                <p>category</p>
                <h3>Alc</h3>
                <img src="" alt="label goes here"></img>
                    <div className="description">
                    <p>Aroma</p>
                    <p>Appearance</p>
                    <p>Flavor</p>
                    <p>Mouthfeel</p>
                    <p>OverallImpression</p>
                    </div>
            </div>
            
        </div>
    )
}
