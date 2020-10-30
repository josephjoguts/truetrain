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
import RedCard from "./main/components/tram_with_delusions_of_grandeur/cards/red_card";
import TechniqueCard from "./main/components/tram_with_delusions_of_grandeur/cards/technique_card";
import LeninCard from "./footer/cards/lenincard";
import TraktorzavodCard from "./footer/cards/traktorzavod";
import HistoryCard from "./footer/cards/historycard";
import TramWith from "./main/components/tram_with_delusions_of_grandeur";
import Footer from "./footer";
function App() {
  return (
    <div>
      <NextStation />
      <TramWith />
      <Footer />
    </div>
  );
}

export default App;
