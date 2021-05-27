import Beer from './Beer';
export default function BeerList(props) {

  const onAdd = props.onAdd;
  const openModal = props.openModal;

  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer setInfoSelected={props.setInfoSelected} openModal={openModal} {...items} key={items.key} onAdd={onAdd}/>)}
    </section>
</div>);

}

