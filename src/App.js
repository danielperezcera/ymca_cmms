import "./App.css";
import { useContext, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Branch, areaList } from "./util/areaList";
// import "./databaseSetup";
import { Context } from "./contexts/context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TicketList from "./components/TicketList/TicketList";
import TicketInfo from "./components/Forms/TicketInfo";

const modelInit = new Branch(areaList);

function App() {
  //this useState is solely used to trigger re-rendering afte database response
  const [isLoading, setLoading] = useState(true);
  const Northwest = useContext(Context);
  const areaRef = collection(db, "tickets");

  useEffect(() => {
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
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/area/:id" element={<TicketList />} />
        <Route path="/addTicket" element={<TicketInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
