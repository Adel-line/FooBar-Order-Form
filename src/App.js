import './App.css';
import Welcome from "./Welcome";
import Tables from "./Tables";
import Ordering from "./Ordering";
import Payment from "./Payment";

function App() {

const beers = [ { name:'Hoppily Ever After', price: 20}, {name:'Row 26', price: 40}, {name:'GitHop', price: '20kr'}, {name: 'Sleighride', price:'20kr'}, {name:'Mowintime', price: '30'}, {name:'ElHefe', price: '40'}, {name:'FairyTaleAle', price: '20'}, {name:'Mowintime', price: '30'}, {name:'Hollaback Lager', price: '30'}, {name:'Ruined Childhood', price: '30'}, {name: 'Steampunk', price: '30'}];

  return (
    <div className="App">
      <Welcome />
      <Tables />
      <Ordering />
      <Payment />
      <BeerList beers = {beers}/>
    </div>
  );
;
}

function BeerList(props) {
  // console.log(beers.object);
  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer {...items}/>)}
    </section>
</div>);

}

function Beer(props) {

  return (
    <article className="tagbox">
  <img className="labels" alt="" src= {`${props.name}.png`}></img>
  <h1>{props.name}</h1>
  <p>{props.price}</p>
  <button>Read more</button>
  <button>+</button>
      </article>
  );
   }


export default App;
