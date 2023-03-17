import "./App.css";
import { useContext, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Branch, areaList } from "./util/areaList";
// import "./databaseSetup";
import { Context } from "./contexts/context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

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

  return <Dashboard />;
}

export default App;
