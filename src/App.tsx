import React from "react";
import Clock from "src/components/clock";
import logo from "src/images/logo.svg";
import Header from "src/header";
import LuckyTicketLogo from "src/components/lucky_ticket_logo";
import Hero from "./main/components/hero";
import Hero_card from "./main/components/hero/card";
import SpeedMeter from "./components/speedmeter";
import SpeedCard from "./main/components/next_station/cards/speed_card";
import TrainCard from "./main/components/next_station/cards/train_card";
import NextStation from "./main/components/next_station";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NextStation />
    </div>
  );
}

export default App;
