import React from "react";
import "./red_card.css";
import LuckyTicketLogo from "../../../../../components/lucky_ticket_logo";

class RedCard extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo_white.svg");
    return (
      <div className={"RedCard"}>
        <nav className={"card__nav nav"}>
          <img src={logo} />
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""}>Technique</a>
          <a href={""}>Stations</a>
        </nav>
        <section className={"content_wrapper"}>
          <h1>careful, the doors are closing.</h1>
          <p>
            The frequency of trains from three minutes in the morning to 25 in
            the evening. Last evening 4-5 trains are on a tight schedule, it
            hangs on each stop point. After 22.00 trains are gradually removed
            from the line and every third tram should be to the depot, that is,
            from the station "Monolith" is on the route number 9.
          </p>
        </section>
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default RedCard;
