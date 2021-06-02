import React from 'react';

export default function Beer(props) {

 const onAdd = props.onAdd;
 const openModal = props.openModal;
 /*const setInfoSelected = props.setInfoSelected;*/

 

    return (
      <section id={props.name} className={`tagbox ${props.validity}`} >
        <img className="labels" alt="" src= {`${props.name}.png`}></img>
        <div className="info1">
              <h1>{props.name}</h1>
              <p>{props.price}</p>
            </div>
          <div className="info2">
        <button onClick={() => openModal(props) }  className="moreinfo">Read more</button>
        <button onClick={() => onAdd(props)} className="addDrink">+</button>
        </div>
      </section>
     
    );
     
}


