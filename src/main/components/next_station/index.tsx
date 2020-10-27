import React from "react";
import "./next_station.css";
import TrainCard from "./cards/train_card";
import SpeedCard from "./cards/speed_card";

class NextStation extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  isVisible(el: Element) {
    if (el != null) {
      return el.getBoundingClientRect().top + 150 <= window.innerHeight;
    }
  }
  handleScroll() {
    const text = document.querySelector(
      ".nextStation_content h1"
    ) as HTMLElement;
    const wrapper = document.querySelector(".nextStation_content");
    if (text != null) {
      if (wrapper != null) {
        if (this.isVisible(wrapper)) {
          text.style.transform = "translate(0)";
        }
      }
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

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
