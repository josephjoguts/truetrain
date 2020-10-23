import React from "react";

import Clock from "src/components/clock";
import "./header.css";
class Header extends React.Component<any, any> {
  render() {
    const logo = require("src/images/logo.svg");
    const phone = require("src/images/header_phone.png");
    const train = require("src/images/header_train.png");
    return (
      <div className={"header"}>
        <div className={"header__title title"}>
          <img src={logo} className={"logo"} />
          <div className={"title-clock-fix"}>
            <h1>Website concept for Volgograd Metrotram</h1>
            <Clock />
          </div>
          <img src={train} className={"train"} />
        </div>
        <img src={phone} className={"phone"} />
      </div>
    );
  }
}
export default Header;
