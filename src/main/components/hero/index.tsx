import React from "react";
import "./hero.css";
import Hero_card from "./card";

class Hero extends React.Component<any, any> {
  isVisible(el: Element | null) {
    if (el != null) {
      return el.getBoundingClientRect().top + 100 <= window.innerHeight;
    }
  }
  handleScroll() {
    const lenin = document.querySelector(".Lenin");
    if (this.isVisible(lenin)) {
      if (lenin != null) {
        console.log(window.innerHeight);
        lenin.classList.add("LeninShow");
      }
    }
    const comrades = document.querySelector(".hero .text_wrapper h1");
    if (comrades != null) {
      let htmlComrades = comrades as HTMLElement;
      if (this.isVisible(document.querySelector(".hero"))) {
        htmlComrades.style.display = "block";
        htmlComrades.style.transform = "translateY(0)";
      }
    }
  }
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const phone = require("src/images/hero_phone.png");
    const ticket = require("src/images/hero_ticket.png");
    const hand = require("src/images/hero_hand.png");
    const lenin = require("src/images/leeeeenin.png");
    return (
      <div className={"main__hero hero"}>
        <div className={"comrades_wrapper"}>
          <img src={phone} />
          <div className={"text_wrapper"}>
            <h1>Comrades, please submit a ticket</h1>
            <div className={"hand_wrapper"}>
              <img src={ticket} className={"ticket"} />
              <img src={hand} className={"hand"} />
            </div>
          </div>
        </div>
        <Hero_card />

        <img src={lenin} className={"Lenin"} />
      </div>
    );
  }
}
export default Hero;
