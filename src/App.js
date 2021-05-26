import './App.css';
import {useState} from "react";

// import Ordering from "./Ordering";
import BeerList from './BeerList';
import Payment from "./payment";
import Tables from "./tables";
import Basket from './Basket';
import Welcome from './Welcome';


function App() {

const beers = [ {id:"1", name:'HoppilyEverAfter', price: 20, key:"1" }, {id:"2", name:'Row26', price: 40, key:"2"}, {id:"3", name:'GitHop', price: 20, key:"3"}, {id:"4", name: 'Sleighride', price:20, key:"4"}, {id:"5", name:'Mowintime', price:30, key:"5"}, {id:"6", name:'ElHefe', price: 40, key:"6"}, {id:"7", name:'FairyTaleAle', price:20, key:"7"}, {id:"8", name:'HollabackLager', price: 30, key:"8"}, {id:"9", name:'RuinedChildhood', price: 30, key:"9"}];

const [cartItems, setCartItems] = useState([]);
const [amount, setAmout] = useState(1);

const onAdd = (beer) => {
  console.log(beer,cartItems);
  if (cartItems.findIndex((x) => x.id === beer.id) === -1) {
    
    const newcartItems = {...beer};
    newcartItems.amount = 1 ;
    setCartItems((newProd) => [...newProd, newcartItems]);
    console.log("not found");
  } else{
    const newItem = cartItems.map((item) => {
       if (item.id === beer.id ) {
          item.amount += 1;
        }
         return (
          item
       )
     });
     setCartItems(newItem);
  }
  console.log(cartItems);
}

const onRemove = (beers) => {
  const available = cartItems.find(x => x.key === beers.key);
  if(available.qty === 1) {
    setCartItems(cartItems.filter((x) => x.key !== beers.key));
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
      <Template amount={amount} beers={beers} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <Form amount={amount} beers={beers} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
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
      </div>
      )
  }else if (props.amount === 2){
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    return(
      <div>
        <BeerList onAdd ={onAdd} onRemove = {onRemove} beers = {props.beers} /> 
      </div>      
    )
  }else{
    return(
      <div>
        <Welcome />
      </div>
    )
  }
}

function Form (props) {
  const [selectedT ,setSelectedT] = useState(null);
  return(
    <section className="base">
      <div className="box">
        <form>
          <Fieldset {...props} selectedT={selectedT} setSelectedT={setSelectedT}  />
        </form>
      </div>
    </section>
  )
}

function Fieldset (props) {
  console.log(props);
  if (props.amount === 1) {
    return (
      <div>
        <Tables selectedT={props.selectedT} setSelectedT={props.setSelectedT} />
        <button className="Button">Proceed with order</button>
      </div>
      )
  }else if (props.amount === 2){
    const cartItems = props.cartItems;
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    return(
        <div>
          <Basket onAdd ={onAdd} onRemove= {onRemove} cartItems={cartItems}/>
            {/* <Ordering /> */}
          <button className="Button">payment</button>
        </div>
    )
  }else{
    return(
      <div>
        <Payment/>
        <button className="Button">Pay</button>
      </div>
    )
  }
}