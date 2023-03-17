import "./App.css";
import { useContext, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Branch, areaList } from "./util/areaList";
import localModelInit from "./util/util";
// import "./databaseSetup";
import { Context } from "./contexts/context";

const modelInit = new Branch(areaList);

function App() {
  const Northwest = useContext(Context);
  useEffect(() => {
    //FIXME: useEffect runs after initial render. Consider creating a separate setup module
    //initialize local model
    localModelInit(modelInit);
    Northwest.setBranch(modelInit);
  }, []);

  return <Dashboard />;
}

export default App;
