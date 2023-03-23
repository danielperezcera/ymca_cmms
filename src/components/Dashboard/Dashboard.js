import Navbar from "../Navbar/Navbar";
import AreaCard from "../AreaCard/AreaCard";
import "./Dashboard.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/context";
import { areaList, Branch } from "../../util/areaList";
import TicketInfo from "../Forms/TicketInfo";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Dashboard() {
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
      <div className="cardArea">
        {areaList.map((area) => {
          return (
            <AreaCard
              key={area}
              area={area}
              maintenance={Northwest.branch.areaList[area].maintenanceCount}
              custodial={Northwest.branch.areaList[area].custodialCount}
              other={Northwest.branch.areaList[area].otherCount}
            ></AreaCard>
          );
        })}
      </div>
      <TicketInfo open={isOpen} onClose={handleOnClose} />
      <div className="addBtn" onClick={handleNewTicket}>
        NEW TICKET
      </div>
    </>
  );
}
