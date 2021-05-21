export default function Beer(props) {

    return (
      <section className="tagbox">
    <img className="labels" alt="" src= {`${props.name}.png`}></img>
    <div className="info1">
    <h1>{props.name}</h1>
    <p>{props.price}</p>
    </div>
    <div className="info2">
    <button>Read more</button>
    <button>+</button>
    </div>
        </section>
     
    );
     }
  