import React from 'react'

export default function BasketItem(props) {
console.log(props);
    const {onAdd, onRemove} = props;
    return (
        <div id="details">
    
<p className="pName">{props.name}</p>
<p className="pQuant">{props.qty} x {props.price}</p>
<div>
<button onClick={() => onAdd(props)} className="add">+</button>
<button onClick={() => onRemove(props)} className="add">-</button>
</div>
        </div>
    )
}
