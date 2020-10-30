import React from "react";
import "./footer.css";
import LeninCard from "./cards/lenincard";
import TraktorzavodCard from "./cards/traktorzavod";
import HistoryCard from "./cards/historycard";

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  isVisibleText(el: Element) {
    if (el != null) {
      return el.getBoundingClientRect().top + 500 <= window.innerHeight;
    }
  }
  handleScroll() {
    if (
      this.isVisibleText(
        document.querySelector(".footer .image_wrapper") as Element
      )
    ) {
      const text = document.querySelector(
        ".footer .image_wrapper h1"
      ) as HTMLElement;
      text.style.top = "30%";
      text.style.animation = "textAnimation 1s 1";
      console.log(text);
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const warrior = require("src/images/mother_calls.png");
    return (
      <div className={"footer"}>
        <LeninCard />
        <TraktorzavodCard />
        <HistoryCard />
        <section className={"image_wrapper"}>
          <h1>careful, the doors are closing.</h1>
          <img src={warrior} />
        </section>
      </div>
    );
  }
}
export default Footer;
