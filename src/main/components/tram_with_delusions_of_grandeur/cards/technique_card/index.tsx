import React from "react";
import "./technique_card.css";
import LuckyTicketLogo from "../../../../../components/lucky_ticket_logo";

class TechniqueCard extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo.svg");
    const technique = require("src/images/techniquecard_picked_item.png");
    const train = require("src/images/small_train.png");
    return (
      <div className={"TechniqueCard"}>
        <nav className={"card__nav nav"}>
          <img src={logo} className={"logo"} />
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""} className={"img"}>
            <img src={technique} />
          </a>
          <a href={""}>Stations</a>
        </nav>
        <section className={"text_wrapper"}>
          <p>
            Despite the fact that from a certain point of view, the metro System
            can be considered a metro System, in terms of technical equipment,
            it is, of course, more inclined to the usual city tram.
          </p>
        </section>
        <section className={"image_wrapper"}>
          <img src={train} />
        </section>
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default TechniqueCard;
