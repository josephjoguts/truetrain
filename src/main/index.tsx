import React from "react";
import "./main.css";
import Hero from "./components/hero";
import NextStation from "./components/next_station";
import TramWith from "./components/tram_with_delusions_of_grandeur";

class Main extends React.Component<any, any> {
  render() {
    return (
      <div className={"main"}>
        <Hero />
        <NextStation />
        <TramWith />
      </div>
    );
  }
}
export default Main;
