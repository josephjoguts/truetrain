import React from "react";
import "./next_station.css";
import TrainCard from "./cards/train_card";
import SpeedCard from "./cards/speed_card";

class NextStation extends React.Component<any, any> {
  render() {
    const nextStationGirl = require("src/images/nextStationGirl.png");
    return (
      <div className={"main__nextStation nextStation"}>
        <TrainCard />
        <SpeedCard />
        <div className={"nextStation_content"}>
          <h1>The next station is pioneerskaya</h1>
          <img src={nextStationGirl} />
        </div>
      </div>
    );
  }
}

export default NextStation;
