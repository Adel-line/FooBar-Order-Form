import './App.css';


// import Ordering from "./Ordering";
import {useState} from "react";
import BeerList from './BeerList';
import Payment from "./payment";
import Tables from "./tables";
import Order from './Form2';
import Welcome from './Welcome';



function App() {

const beers = [ { name:'HoppilyEverAfter', price: '20kr', key:"1"}, {name:'Row26', price: '40kr', key:"2"}, {name:'GitHop', price: '20kr', key:"3"}, {name: 'Sleighride', price:'20kr', key:"4"}, {name:'Mowintime', price: '30kr', key:"5"}, {name:'ElHefe', price: '40kr', key:"6"}, {name:'FairyTaleAle', price: '20kr', key:"7"}, {name:'HollabackLager', price: '30kr', key:"8"}, {name:'RuinedChildhood', price: '30kr', key:"9"}];





const [amout, setAmout] = useState(1);
console.log();

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
        {/* <Ordering /> */}
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