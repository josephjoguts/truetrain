import React from "react";
import "./train_card.css";

class TrainCard extends React.Component<any, any> {
  render() {
    return (
      <div className={"TrainCard"}>
        <nav className={"card__nav nav"}>
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""}>Technique</a>
          <a href={""}>Stations</a>
        </nav>
      </div>
    );
  }
}
