import React from "react";
import "./hero.css";
import Hero_card from "./card";

class Hero extends React.Component<any, any> {
  render() {
    const phone = require("src/images/hero_phone.png");
    const ticket = require("src/images/hero_ticket.png");
    const hand = require("src/images/hero_hand.png");
    return (
      <div className={"main__hero hero"}>
        <div className={"comrades_wrapper"}>
          <img src={phone} />
          <div className={"text_wrapper"}>
            <h1>Comrades, please submit a ticket</h1>
            <div className={"hand_wrapper"}>
              <img src={ticket} className={"ticket"} />
              <img src={hand} className={"hand"} />
            </div>
          </div>
        </div>
        <Hero_card />
      </div>
    );
  }
}
export default Hero;
