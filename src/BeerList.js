import Beer from './Beer';

export default function BeerList(props) {

  
  const onAdd = props.onAdd;
  const openModal = props.openModal;

props.validBeers.forEach(elements => { elements.beer =  elements.beer.replaceAll(" ", "") ;console.log(elements.beer) });

props.beers.forEach( item => {
  props.validBeers.forEach((x) => {
  if (item.name === x.beer) {
    console.log(item.name, x.beer);   
    item.validity = true;
    
  }else{
    if(!item.validity){
      item.validity = "notinStock";
    }else{
      console.log("allreday in here");
    }

  }})
});
console.log(props.beers);


  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer  setInfoSelected={props.setInfoSelected} openModal={openModal} {...items} key={items.key} onAdd={onAdd}/>)}
    </section>
</div>);

}
