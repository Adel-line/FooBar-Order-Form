import Beer from './Beer';

export default function BeerList(props) {
  const onAdd = props.onAdd;
  console.log(props);
  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer {...items} key={items.key} onAdd={onAdd}/>)}
    </section>
</div>);

}

