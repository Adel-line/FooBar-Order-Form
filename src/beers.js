import './App.css';

Template();

function Template() {
    return (
    <section is="beerplaceH">
    <template id="beerType">
       <img></img>
       <h2><span>Name</span></h2>
       <p><span>Price:</span></p>
       <button>Add<span>+</span></button>
    </template>
  </section>
    );
}

