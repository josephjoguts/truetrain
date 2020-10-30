import React from "react";
import "./lenincard.css";
import LuckyTicketLogo from "../../../components/lucky_ticket_logo";

class LeninCard extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo_white.svg");
    const stations = require("src/images/lenincard_picked_item.png");
    const trainloading = require("src/images/train_loading.png");
    return (
      <div className={"LeninCard"}>
        <div className={"content_wrapper"}>
          <nav className={"card__nav nav"}>
            <img src={logo} className={"logo"} />
            <div className={"nav_border border"}></div>
            <a href={""} className={"text"}>
              Metrotram{" "}
            </a>
            <a href={""} className={"text"}>
              Hystory
            </a>
            <a href={""} className={"text"}>
              Technique
            </a>
            <a href={""}>
              <img src={stations} />
            </a>
          </nav>
          <section className={"text_wrapper"}>
            <h1>LENIN SQUARE</h1>
            <p>
              Underground station of single-vaulted type. The distance from the
              surface to the level of the rail heads is about 7 meters. It has
              one lobby equipped with two escalators. Entrance to the lobby from
              the underground passage under the square.
            </p>
          </section>
        </div>
        <img src={trainloading} className={"loading"} />
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default LeninCard;
