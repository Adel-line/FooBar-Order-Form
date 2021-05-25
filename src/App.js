import './App.css';
import {useState} from "react";

// import Ordering from "./Ordering";
import BeerList from './BeerList';
import Payment from "./Payment";
import Tables from "./Tables";
import Basket from './Basket';
import Welcome from './Welcome';


function App() {

const beers = [ { id:"1", name:'HoppilyEverAfter', price: '20kr', key:"1"}, { id:"2", name:'Row26', price: '40kr', key:"2"}, {id:"3", name:'GitHop', price: '20kr', key:"3"}, { id:"4", name: 'Sleighride', price:'20kr', key:"4"}, {id:"5", name:'Mowintime', price: '30kr', key:"5"}, {id:"6", name:'ElHefe', price: '40kr', key:"6"}, {id:"7", name:'FairyTaleAle', price: '20kr', key:"7"}, {id:"8", name:'HollabackLager', price: '30kr', key:"8"}, {id:"9", name:'RuinedChildhood', price: '30kr', key:"9"}];

const [cartItems, setCartItems] = useState([]);
const [amount, setAmout] = useState(1);

const onAdd = (beers) => {
  const available = cartItems.find(x => x.id === beers.name);
  if (available) {
setCartItems(cartItems.map(x => x.name === beers.id ? {...available, qty: available.qty +1} :x));
  }
  else {
    setCartItems([...cartItems, {...beers, qty: 1}]);
  }
}

const onRemove = (beers) => {
  const available = cartItems.find(x => x.id === beers.name);
  if(available.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== beers.id));
  } else {
    setCartItems(cartItems.map(x => x.name === beers.id ? {...available, qty: available.qty -1} :x));
  }
}

function clicked (){
  console.log("haha lol");
  setAmout((prevState) => {
    if (prevState===3){
      return prevState

    }else{
      return prevState+1
    }
    // return prevState+1
   } );
}
function clickedminus (){
  console.log("haha lol");
  setAmout((prevState) => {
    if (!prevState){
      return prevState

    }else{
      return prevState-1
    }
    
   } );
}
  return (
    <div className="App">
      <Template amount={amount} beers={beers} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      <div className="change-page">
          <button onClick={clicked} > click me for more! </button>
            {amount}
          <button onClick={clickedminus} > click me for less! </button>
      </div>

    </div>
  );
;
}

export default App;

function Template(props) {
  console.log(props);
  if (props.amount === 1) {
    return (
      <div>
      <Welcome />
      <section className="base">
        <div className="box">
          <Tables />
          <button className="Button">Proceed with order</button>
        </div>
      </section>
      </div>
      )
  }else if (props.amount === 2){
    const cartItems = props.cartItems;
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    return(
      <div>
        
      <BeerList onAdd ={onAdd} onRemove = {onRemove} beers = {props.beers} /> 
      <section className="base">
        <div className="box">
        <Basket onAdd ={onAdd} onRemove= {onRemove} cartItems={cartItems}/>
        {/* <Ordering /> */}
        <button className="Button">payment</button>
        </div>
      </section>
      </div>      
    )
  }else{
    return(
      <div>
      <Welcome />
      <section className="base">
        <div className="box">
        <Payment/>
        <button className="Button">Pay</button>
        </div>
      </section>
      </div>
    )
  }
}