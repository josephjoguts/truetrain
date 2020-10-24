import React, { SyntheticEvent } from "react";

import Clock from "src/components/clock";
import "./header.css";
class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      startRiding: "",
    };
    this.startRiding = this.startRiding.bind(this);
  }
  startRiding() {
    this.setState(() => ({
      startRiding: "train_ride",
    }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.startRiding);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.startRiding);
  }

  render() {
    const logo = require("src/images/logo.svg");
    const phone = require("src/images/header_phone.png");
    const train = require("src/images/header_train.png");
    return (
      <div className={"header"}>
        <div
          className={"header__title title"}
          onScroll={() => this.startRiding()}
        >
          <img src={logo} className={"logo"} />
          <div className={"title-clock-fix"}>
            <h1>Website concept for Volgograd Metrotram</h1>
            <Clock />
          </div>
          <img src={train} className={`train ${this.state.startRiding}`} />
        </div>
        <img src={phone} className={"phone"} />
      </div>
    );
  }
}
export default Header;
