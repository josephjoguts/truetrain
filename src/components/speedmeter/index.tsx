import React from "react";
import "./speedmeter.scss";

class SpeedMeter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleJump = this.handleJump.bind(this);
  }
  private interval: any;
  componentDidMount() {
    this.interval = setInterval(this.handleJump, 1500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleJump() {
    let pointer = document.querySelector(".pointer");

    if (pointer != null) {
      pointer.classList.toggle("pointer_jump");
    }
  }
  render() {
    const background = require("src/images/speedmeter.png");
    const pointer = require("src/images/pointer.svg");
    return (
      <div className={"SpeedMeter"}>
        <img src={background} />
        <img src={pointer} className={"pointer"} />
      </div>
    );
  }
}

export default SpeedMeter;
