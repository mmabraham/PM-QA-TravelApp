import React, { useState } from "react";
import logo from "./assests/icon/Logo.png";
import airplane from "./assests/icon/flights.jpg";
import { Input } from "semantic-ui-react";
import { data } from "./data/data";

function App() {
  //state
  const [amountToSave, setamountToSave] = useState("");
  const [monthToSave, setmonthToSave] = useState("");
  const [numberAdults, setnumberAdults] = useState("");
  const [selectedCountry, setselectedCountry] = useState(0);

  //methoads
  const handleAmountToSaveInputChange = (event) => {
    let value = event.target.value;
    setamountToSave(value);
  };

  const handleMonthToSaveInputChange = (event) => {
    let value = event.target.value;
    setmonthToSave(value);
  };

  const handleNumberOfAdultsChange = (event) => {
    let value = event.target.value;
    setnumberAdults(value);
  };

  const totalSaveAmount = () => {
    if (amountToSave && monthToSave !== "") {
      return parseInt(amountToSave) * parseInt(monthToSave);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" />
        <div className="app-header-text">
          <div>
            <h3>
              You and your family are dying to go on a trip after the Pandemic.
            </h3>
          </div>
          <div>
            <h3>
              Use our handy calculator to calculate how much to save, for how
              long and which country you can afford to visit!
            </h3>
          </div>
        </div>
      </div>
      <div className="app-banner">
        <div className="app-banner-text">
          <h3>Save now and book yours next trip</h3>
          <img src={airplane} />
        </div>
        <hr></hr>
      </div>
      <div className="app-content">
        <div className="app-content-field">
          <Input
            type="number"
            fluid
            label="Amount to save"
            placeholder="Please enter amount to save per month..."
            className="app-content-field-input"
            value={amountToSave}
            onChange={handleAmountToSaveInputChange}
          />
          <Input
            type="number"
            fluid
            label="Month to save"
            placeholder="Please enter amount of months..."
            className="app-content-field-input"
            value={monthToSave}
            onChange={handleMonthToSaveInputChange}
          />
          <h3>
            Total Saved{" "}
            <span className="app-content-field-totalAmount">
              {totalSaveAmount()}
            </span>{" "}
            dollars
          </h3>
        </div>
        <div className="app-content-traver">
          <Input
            fluid
            type="number"
            label="Travellers"
            className="app-content-field-input"
            value={numberAdults}
          />
          <Input
            fluid
            type="number"
            label="Adults"
            placeholder="Please enter number of adults..."
            className="app-content-field-input"
            value={numberAdults}
            onChange={handleNumberOfAdultsChange}
          />
          <Input
            fluid
            type="number"
            label="Children"
            placeholder="Please enter number of children..."
            className="app-content-field-input"
          />
        </div>
      </div>
      <div className="app-views">
        <div>
          <h3>Here are some countries we provide service.</h3>
        </div>
        <div className="app-views-wrapper">
          <div className="app-views-wrapper-info">
            <Input
              fluid
              label="Airfare"
              value={data[0].airfareFee}
              className="app-views-wrapper-info-input"
            />
            <Input
              fluid
              label="Hoteal"
              value={data[0].hotelFee}
              className="app-views-wrapper-info-input"
            />
            <Input
              fluid
              label="Cost Per Adult"
              value={data[0].total}
              className="app-views-wrapper-info-input"
            />
          </div>
          <div className="app-views-wrapper-img">
            <img src={require(`${data[0].url}`)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
