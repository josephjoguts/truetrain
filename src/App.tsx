import React from "react";
import Clock from "src/components/clock";
import logo from "src/images/logo.svg";
import Header from "src/header";
import LuckyTicketLogo from "src/components/lucky_ticket_logo";
import Hero from "./main/components/hero";
import Hero_card from "./main/components/hero/card";
function App() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
