import React from "react";
import "./card.css";
import LuckyTicketLogo from "../../../../components/lucky_ticket_logo";

class Hero_card extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo.svg");
    const arc = require("src/images/small_arc.svg");
    const train = require("src/images/small_train.png");
    const people = require("src/images/hero_card_people.png");
    const background = require("src/main/components/hero/card/background_tram_with.png");
    return (
      <div className={"hero__card card"}>
        <nav className={"card__nav nav"}>
          <img src={logo} />
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""}>Technique</a>
          <a href={""}>Stations</a>
        </nav>
        <div className={"card__description description"}>
          <p>
            At first, it is customary to say " welcome!". So, welcome to the
            website dedicated to Volgograd high — speed tram-one of the most
            unusual transport systems in Russia.
          </p>
        </div>
        <div className={"card__images images"}>
          <img src={train} className={"train"} />
          <img src={arc} className={"arc"} />
          <img src={people} className={"people"} />
        </div>
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default Hero_card;
