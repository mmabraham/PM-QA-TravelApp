import React, { useState } from "react";
import logo from "./assests/icon/Logo.png";
import airplane from "./assests/icon/flights.jpg";
import { Input } from "semantic-ui-react";
import happy from "./assests/icon/happyFace.png";
import sad from "./assests/icon/sadFace.png";
import { Icon, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function App() {
  //state
  const [amountToSave, setamountToSave] = useState("");
  const [monthToSave, setmonthToSave] = useState("");
  const [numberAdults, setnumberAdults] = useState("");
  const [selectedCountry, setselectedCountry] = useState(0);

  //data
  const data = [
    {
      name: "China",
      hotelFee: 400,
      airfareFee: 940,
      total: 1340,
      alt: "china",
      url: "./assests/landmarkImages/UK.jpg",
    },
    {
      name: "Australia",
      hotelFee: 450,
      airfareFee: 1300,
      total: 2000,
      url: "./assests/landmarkImages/Australia.jpg",
      alt: "australia",
    },
    {
      name: "France",
      hotelFee: 500,
      airfareFee: 1250,
      total: 1750,
      url: "./assests/landmarkImages/France.jpg",
      alt: "france",
    },
    {
      name: "Greece",
      hotelFee: 400,
      airfareFee: 1000,
      total: 1400,
      url: "./assests/landmarkImages/Greece.jpg",
      alt: "greece",
    },
    {
      name: "United Kingdom",
      hotelFee: 30,
      airfareFee: 130,
      total: 160,
      url: "./assests/landmarkImages/china.jpg",
      alt: "uk",
    },
    {
      name: "United Sates of America",
      hotelFee: 550,
      airfareFee: 1100,
      total: 1650,
      url: "./assests/landmarkImages/united_states.jpg",
      alt: "us",
    },
  ];

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

  const totalSpend = () => {
    return data[selectedCountry].total * numberAdults;
  };

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt=
        "logo"/>
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
          <Link to="/trip">
            <img src={airplane} className="app-banner-text-icon" alt="airplane"/>
          </Link>
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
          <h2>Here are some countries we offer services.</h2>
        </div>
        <div className="app-views-wrapper">
          <div className="app-views-wrapper-info">
            <p>*Below price is per adult, children is $100 less.</p>
            <Input
              fluid
              label="Airfare"
              value={data[selectedCountry].airfareFee}
              className="app-views-wrapper-info-input"
            />
            <Input
              fluid
              label="Hoteal"
              value={data[selectedCountry].hotelFee}
              className="app-views-wrapper-info-input"
            />
            <Input
              fluid
              label="Cost Per Adult"
              value={data[selectedCountry].total}
              className="app-views-wrapper-info-input"
            />
            <Input
              fluid
              label="Total Cost"
              value={totalSpend()}
              className="app-views-wrapper-info-input"
            />
          </div>
          <div className="app-views-wrapper-emoji">
            {totalSaveAmount() > totalSpend() ? (
              <img src={happy} alt="happy"/>
            ) : (
              <img src={sad} alt="sad"/>
            )}

            <h3>Congrats! Your family can afford the trip!</h3>
          </div>
          <div className="app-views-wrapper-img">
            <Icon
              name="angle left"
              size="big"
              className="app-views-wrapper-img-arrow"
              onClick={() => setselectedCountry(selectedCountry - 1)}
            />
            <Card>
              <Image src={require(`${data[selectedCountry].url}`)} />
              <Card.Content>
                <Card.Header className="app-views-wrapper-img-header">
                  {data[selectedCountry].name}
                </Card.Header>
              </Card.Content>
            </Card>
            <Icon
              name="angle right"
              size="big"
              className="app-views-wrapper-img-arrow"
              onClick={() => setselectedCountry(selectedCountry + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
