import './App.css';

import Welcome from "./Welcome";
import Tables from "./tables";
import Ordering from "./Ordering";
import {useState} from "react";
import BeerList from './BeerList';
import Payment from "./payment";

import Order from './Form2';



function App() {

const beers = [ { name:'HoppilyEverAfter', price: '20kr'}, {name:'Row26', price: '40kr'}, {name:'GitHop', price: '20kr'}, {name: 'Sleighride', price:'20kr'}, {name:'Mowintime', price: '30kr'}, {name:'ElHefe', price: '40kr'}, {name:'FairyTaleAle', price: '20kr'}, {name:'HollabackLager', price: '30kr'}, {name:'RuinedChildhood', price: '30kr'}];





const [amout, setAmout] = useState(1);
console.log();

function clicked (){
  console.log("haha lol");
  setAmout((prevState) => {
    return prevState+1
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
      <Template amout={amout} beers={beers} />
      <div className="change-page">
          <button onClick={clicked} > click me for more! </button>
            {amout}
          <button onClick={clickedminus} > click me for less! </button>
      </div>

    </div>
  );
;
}

export default App;

function Template(props) {
  console.log(props);
  if (props.amout === 1) {
    return (
      <div>
        <Welcome />
      <section className="base">
        <div className="box">
        <Tables />
        </div>
      </section>
      </div>
      )
  }else if (props.amout === 2){
    return(
      <div>
        <Order/>
      <BeerList beers = {props.beers}/> 
      <section className="base">
        <div className="box">
        <Ordering />
        </div>
      </section>
      </div>      
    )
  }else{
    return(
      <div>
      
      <section className="base">
        <div className="box">
        <Payment/>
        </div>
      </section>
      </div>
    )
  }
}