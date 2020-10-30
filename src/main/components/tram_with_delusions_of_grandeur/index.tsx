import React from "react";
import "./tram_with.css";
import RedCard from "./cards/red_card";
import TechniqueCard from "./cards/technique_card";

class TramWith extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  isVisibleText(el: Element) {
    if (el != null) {
      return el.getBoundingClientRect().top + 500 <= window.innerHeight;
    }
  }
  isVisiblePhones(el: Element) {
    if (el != null) {
      return el.getBoundingClientRect().top - 150 <= window.innerHeight;
    }
  }
  handleScroll() {
    if (this.isVisiblePhones(document.querySelector(".TramWith") as Element)) {
      const phones = document.querySelector(".phones_wrapper") as HTMLElement;
      phones.style.transform = "translateY(-300px)";
      phones.style.animation = "textAnimation 500ms 1";
    }
    if (
      this.isVisibleText(
        document.querySelector(".image_wrapper img") as Element
      )
    ) {
      const text = document.querySelector(
        ".TramWith .image_wrapper h1"
      ) as HTMLElement;
      text.style.transform = "translateY(0)";
      text.style.animation = "textAnimation 500ms 1";
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const phone1 = require("src/images/phones/p1.png");
    const phone2 = require("src/images/phones/p2.png");
    const phone3 = require("src/images/phones/p3.png");
    const mother_cals = require("src/images/mother_calls.png");
    return (
      <div className={"TramWith"}>
        <section className={"phones_wrapper"}>
          <img src={phone1} />
          <img src={phone2} />
          <img src={phone3} />
        </section>
        <RedCard />
        <section className={"image_wrapper"}>
          <h1>Tram with delusions of grandeur</h1>
          <img src={mother_cals} />
        </section>
        <TechniqueCard />
      </div>
    );
  }
}
export default TramWith;
