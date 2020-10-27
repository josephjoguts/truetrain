import React from "react";
import "./speed_card.scss";
import SpeedMeter from "../../../../../components/speedmeter";
import LuckyTicketLogo from "../../../../../components/lucky_ticket_logo";
class SpeedCard extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo.svg");
    const lArc = require("src/images/large_arc.svg");
    return (
      <div className={"SpeedCard"}>
        <img src={logo} className={"logo"} />
        <div className={"content_wrapper"}>
          <div className={"speedmeter_wrapper"}>
            <SpeedMeter />
            <p>
              The section from the stop "Monolith" to the final "Traktorozavod"
              high-speed tram divides with the city route number 9, so that the
              speed at high-speed and conventional trains in this area turns out
              the same.
            </p>
          </div>
          <h1>speed 56 км/h</h1>
        </div>
        <LuckyTicketLogo />
      </div>
    );
  }
}

export default SpeedCard;
