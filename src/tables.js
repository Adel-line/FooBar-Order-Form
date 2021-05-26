export default function Tables(props) {
    // $("input[type='radio'][name='table']:checked").value;
    // const t = document.querySelector('input[name="table"]:checked').value;
    // console.log(t);
    // if (t == "0") {
    // }

    return (
      <fieldset className="Form">
          {/* <OrderNum /> */}
          <p className="TablesOrder">Order no. 12345</p>
          <p className="TablesHeader">Select your table:</p>
          <section className="Tables">
            <div className="TablesGrid">
                <div className="Table">
                    <label>
                        <input type="radio" id="table1" name="table" value="table1" checked={props.selectedT === "table1"} onChange={ () => props.setSelectedT("table1") } ></input>
                        <img  className="TableRow1 Img1Collum1" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">1</div> 
                    </label> 
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table2" name="table" value="table2" checked={props.selectedT === "table2"} onChange={ () => props.setSelectedT("table2") }></input>
                        <img  className="TableRow1 Img1Collum2" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">2</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table3" name="table" value="table3" checked={props.selectedT === "table3"} onChange={ () => props.setSelectedT("table3") }></input>
                        <img  className="TableRow1 Img1Collum3" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">3</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table4" name="table" value="table4"></input>
                        <img  className="TableRow2 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">4</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table5" name="table" value="table5"></input>
                        <img  className="TableRow2 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">5</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="tabl6"  name="table" value="table6"></input>
                        <img  className="TableRow2 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">6</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table7" name="table" value="table7"></input>
                        <img  className="TableRow3 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">7</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="tabl8" name="table" value="table8"></input>
                        <img  className="TableRow3 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">8</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" id="table9" name="table" value="table9"></input>
                        <img  className="TableRow3 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">9</div>
                    </label>
                </div>
            </div>
          </section>
          {/* <button type="button" className="Button">Proceed with order</button> */}
           {/* <span>
               <input className="Button" type="Submit" value="Proceed with order"></input>
           </span> */}
      </fieldset>
    );
    
  }