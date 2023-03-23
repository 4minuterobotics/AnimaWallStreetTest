import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import BeforeBlastNoPosition from "./components/BeforeBlastNoPosition";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|before-blast-no-position)">
          <BeforeBlastNoPosition {...beforeBlastNoPositionData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const beforeBlastNoPositionData = {
    surname: "Wall Street Blast",
    price1: "$100,000.00",
    myUsername: "MY USERNAME",
    navbarLinkUsername50001: "username: $50.00",
    navbarLinkUsername50002: "username: $50.00",
    navbarLinkUsername50003: "username: $50.00",
    navbarLinkUsername50004: "username: $50.00",
    number1: "3",
    number2: "2",
    number3: "1",
    vector10: "/img/vector-8@2x.png",
    nextRoundIn: "NEXT ROUND IN",
    vector9: "/img/vector-8@2x.png",
    title: "15.0s",
    vector8: "/img/vector-8@2x.png",
    spanText1: "1.0",
    spanText2: "x",
    amc1: "AMC",
    spanText3: "1.0",
    spanText4: "x",
    gme1: "GME",
    spanText5: "1.0",
    spanText6: "x",
    bby1: "BBY",
    vector5: "/img/vector-5@2x.png",
    group91: "/img/group-9-1@2x.png",
    amc2: "AMC",
    text11: "+72.3%",
    polygon21: "/img/polygon-2@2x.png",
    x604X1: "60.4x",
    gme2: "GME",
    text12: "-85.5%",
    polygon22: "/img/polygon-2-1@2x.png",
    x604X2: "60.4x",
    bby2: "BBY",
    text13: "+72.3%",
    polygon23: "/img/polygon-2@2x.png",
    x604X3: "60.4x",
    rocketShipSvgrepoCom1: "/img/rocket-ship-svgrepo-com-1@2x.png",
    group92: "/img/group-9@2x.png",
    iconSettings: "/img/settings-svgrepo-com--1--1@2x.png",
    vector2: "/img/vector@2x.png",
    open: "OPEN",
    pnl: "PNL",
    name: "MAX GAIN",
    aMC: <React.Fragment>A<br />M<br />C</React.Fragment>,
    gme3: "GME",
    bby3: "BBY",
    text2: "---",
    text5: "---",
    text6: "---",
    text3: "---",
    text7: "---",
    text8: "---",
    text4: "---",
    text9: "---",
    text10: "---",
    cashout: "CASHOUT",
    close1: "CLOSE",
    close2: "CLOSE",
    close3: "CLOSE",
    text1: "---",
    price2: "$0.00",
    totalBet: "TOTAL BET",
    totalProfit: "TOTAL Profit",
    openPosition: "Open Position",
};

