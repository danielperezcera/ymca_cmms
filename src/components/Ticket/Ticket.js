import { collection, getDocs } from "firebase/firestore";
import { useContext, useState } from "react";
import { Context } from "../../contexts/context";
import { db } from "../../firebase";
import { areaList, Branch } from "../../util/areaList";
import TicketUpdate from "../Forms/TicketUpdate";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  const Northwest = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleOnClose = async () => {
    const modelInit = new Branch(areaList);
    const areaRef = collection(db, "tickets");
    //created function to be able to make it async
    const getData = async () => {
      //await for the data received by getDocs, then change state to trigger re-render
      const data = await getDocs(areaRef).then(setLoading(false));

      //load the response into the local model (Branch class)
      data.forEach((doc) => {
        modelInit.areaList[`${doc.data().area}`].addTicket(doc.id, doc.data());
      });
      //Load the database response into context to properly share
      Northwest.setBranch(modelInit);
    };
    await getData();

    setIsOpen(false);
  };

  const handleTicketUpdate = () => {
    setLoading(true);
    setIsOpen(true);
  };

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: "EDT",
  };
  // const date = "Timestamp";
  const date = ticket.submitted.toDate().toLocaleString("en-US", options);

  return (
    <>
      <div className="ticket" onClick={handleTicketUpdate}>
        <h3>{ticket.type}</h3>
        <p id="date">{date}</p>
        <p>
          <b>{ticket.contact}:</b> {ticket.description}
        </p>
        {ticket.assign ? (
          <p>
            <b>Assigned to:</b> {ticket.assign}
          </p>
        ) : null}
        {ticket.status ? (
          <p>
            <b>Status:</b> {ticket.status}
          </p>
        ) : null}
        {ticket.notes ? (
          <p>
            <b>NOTES AVAILABLE</b>
          </p>
        ) : null}
      </div>
      <TicketUpdate open={isOpen} onClose={handleOnClose} ticket={ticket} />
    </>
  );
}
