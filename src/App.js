import './App.css';
import BeerList from './BeerList';

function App() {

const beers = [ { name:'HoppilyEverAfter', price: '20kr'}, {name:'Row26', price: '40kr'}, {name:'GitHop', price: '20kr'}, {name: 'Sleighride', price:'20kr'}, {name:'Mowintime', price: '30kr'}, {name:'ElHefe', price: '40kr'}, {name:'FairyTaleAle', price: '20kr'}, {name:'HollabackLager', price: '30kr'}, {name:'RuinedChildhood', price: '30kr'}, {name: 'Steampunk', price: '30kr'}];

  return (
    <div className="App">
      <BeerList beers = {beers}/>
      <Template/>
    </div>
  );
;
}

export default App;

function Template() {
  return (
  <section className="base">
<div className="box">

</div>
  </section>
  )
}