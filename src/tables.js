export default function Tables() {
    return (
      <section className="Form">
          {/* <OrderNum /> */}
          <p className="TablesOrder">Order no. 12345</p>
          <p className="TablesHeader">Select your table:</p>
          <section className="Tables">
            <div className="TablesGrid">
                <div className="Table">
                    <img  className="TableImg1 Img1Collum1" alt="Table1" src="./Images/tableS@2x.png"></img>
                    <div className="TablesText">1</div>
                </div>
                <div className="Table">
                    <img  className="TableImg1 Img1Collum2" alt="Table1" src="./Images/tableS@2x.png"></img>
                    <div className="TablesText">2</div>
                </div>
                <div className="Table">
                    <img  className="TableImg1 Img1Collum3" alt="Table1" src="./Images/tableS@2x.png"></img>
                    <div className="TablesText">3</div>
                </div>
                <div className="Table">
                    <img  className="TableImg2 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">4</div>
                </div>
                <div className="Table">
                    <img  className="TableImg2 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">5</div>
                </div>
                <div className="Table">
                    <img  className="TableImg2 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">6</div>
                </div>
                <div className="Table">
                    <img  className="TableImg3 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">7</div>
                </div>
                <div className="Table">
                    <img  className="TableImg3 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">8</div>
                </div>
                <div className="Table">
                    <img  className="TableImg3 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                    <div className="TablesText">9</div>
                </div>
            </div>
          </section>
          {/* <button type="button" className="Button">Proceed with order</button> */}
           {/* <span>
               <input className="Button" type="Submit" value="Proceed with order"></input>
           </span> */}
      </section>
    );
  }