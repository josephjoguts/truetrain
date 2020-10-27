import React from "react";
import "./train_card.css";
import LuckyTicketLogo from "../../../../../components/lucky_ticket_logo";

class TrainCard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      peopleJump: 0,
    };
  }
  isVisible(el: Element) {
    if (el != null) {
      return (
        el.getBoundingClientRect().top +
          el.getBoundingClientRect().height / 2 <=
        window.innerHeight
      );
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    if (this.state.peopleJump == 0) {
      const trainCard = document.querySelector(".TrainCard");
      if (trainCard != null) {
        if (this.isVisible(trainCard)) {
          const train = document.querySelector(".train_wrapper");
          if (train != null) train.classList.add("train_ride");
          this.setState(() => ({ peopleJump: 1 }));
          const people = document.querySelector(".TrainCard .people");
          if (people != null) {
            people.classList.add("people_jump");
            console.log(people);
          }
        }
      }
    }
  }
  render() {
    const logo = require("src/images/logo.svg");
    const train = require("src/images/small_train.png");
    const people = require("src/images/hero_card_people.png");
    return (
      <div className={"TrainCard"}>
        <nav className={"card__nav nav"}>
          <img src={logo} />
          <a href={""}>Metrotram</a>
          <a href={""}>Hystory</a>
          <a href={""}>Technique</a>
          <a href={""}>Stations</a>
        </nav>
        <div className={"content_wrapper"}>
          <p className={"bigLetter"}>
            The high-speed tram system consists of from one line with a length
            of 14 km, partially (in the North) using the city tram network. The
            line connects the Northern parts of the city with the center.
          </p>
          <p>
            Starting near the tractor Plant, it goes first parallel to the
            tracks of the city train, and then-along the Avenue V. I. Lenin
          </p>
        </div>
        <div className={"train_wrapper"}>
          <img src={train} className={"train"} />
          <img src={people} className={"people"} />
        </div>
        <LuckyTicketLogo />
      </div>
    );
  }
}
export default TrainCard;
