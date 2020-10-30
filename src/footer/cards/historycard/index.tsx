import React from "react";
import "./historycard.css";
import LuckyTicketLogo from "../../../components/lucky_ticket_logo";

class HistoryCard extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo.svg");
    const technique = require("src/images/techniquecard_picked_item.png");
    return (
      <div className={"HistoryCard"}>
        <nav className={"card__nav nav"}>
          <img src={logo} className={"logo"} />
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""} className={"img"}>
            <img src={technique} />
          </a>
          <a href={""}>Stations</a>
        </nav>
        <p>
          В Краснооктябрьском районе было открыто новое трамвайное депо для
          обслуживания ействовавшего 8-го маршрута и нового 9-го маршрута,
          который связал район трамвайного депо с линией по проспекту Ленина и
          Тракторным заводом. Процесс реконструкции линии трамвая продолжался до
          1976 г.
        </p>
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default HistoryCard;
