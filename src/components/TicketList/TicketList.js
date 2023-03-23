import { collection, getDocs } from "firebase/firestore";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../contexts/context";
import { db } from "../../firebase";
import { areaList, Branch } from "../../util/areaList";
import TicketInfo from "../Forms/TicketInfo";
import Navbar from "../Navbar/Navbar";
import Ticket from "../Ticket/Ticket";
import "./TicketList.css";

export default function TicketList() {
  const { id } = useParams();
  const Northwest = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleNewTicket = () => {
    setLoading(true);
    setIsOpen(true);
  };

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

  return (
    <>
      <Navbar />
      <div className="ticketArea">
        {Northwest.branch.areaList[id].ticketList.map((ticket) => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })}
      </div>
      <TicketInfo open={isOpen} onClose={handleOnClose} />
      <div className="addBtn" onClick={handleNewTicket}>
        NEW TICKET
      </div>
    </>
  );
}
