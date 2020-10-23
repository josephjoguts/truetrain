import React from "react";
import "./lucky_ticket_logo.css";
function LuckyTicketLogo() {
  const lucky_ticket = require("src/images/lucky_ticket.png");
  return (
    <div className={"LuckyTicketLogo"}>
      <img src={lucky_ticket} />
    </div>
  );
}
export default LuckyTicketLogo;
