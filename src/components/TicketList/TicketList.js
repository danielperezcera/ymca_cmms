import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../contexts/context";
import Navbar from "../Navbar/Navbar";
import Ticket from "../Ticket/Ticket";
import "./TicketList.css";

export default function TicketList() {
  const { id } = useParams();
  const Northwest = useContext(Context);
  console.log(Northwest.branch);
  return (
    <>
      <Navbar />
      <div className="ticketArea">
        {Northwest.branch.areaList[id].ticketList.map((ticket) => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })}
      </div>
    </>
  );
}
