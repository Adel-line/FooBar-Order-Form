export default function Tables() {
    return (
      <section className="Form">
          {/* <OrderNum /> */}
          <p className="TablesOrder">Order no. 12345</p>
          <p className="TablesHeader">Select your table:</p>
          <section className="Tables">
            <form className="TablesGrid">
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table1"></input>
                        <img  className="TableRow1 Img1Collum1" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">1</div> 
                    </label> 
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table2"></input>
                        <img  className="TableRow1 Img1Collum2" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">2</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table3"></input>
                        <img  className="TableRow1 Img1Collum3" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">3</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table4"></input>
                        <img  className="TableRow2 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">4</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table5"></input>
                        <img  className="TableRow2 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">5</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table6"></input>
                        <img  className="TableRow2 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">6</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table7"></input>
                        <img  className="TableRow3 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">7</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table8"></input>
                        <img  className="TableRow3 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">8</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" name="table" value="table9"></input>
                        <img  className="TableRow3 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">9</div>
                    </label>
                </div>
            </form>
          </section>
          {/* <button type="button" className="Button">Proceed with order</button> */}
           {/* <span>
               <input className="Button" type="Submit" value="Proceed with order"></input>
           </span> */}
      </section>
    );
    
  }