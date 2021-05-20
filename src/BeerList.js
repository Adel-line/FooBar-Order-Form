import Beer from './Beer';

export default function BeerList(props) {
  // console.log(beers.object);
  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer {...items}/>)}
    </section>
</div>);

}

