import { useEffect } from "react";
import "./App.css";
import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return <Dashboard />;
}

export default App;

// const firebaseCollectionRef = collection(db, "Areas");
// useEffect(() => {
//   const getData = async () => {
//     const data = await getDocs(firebaseCollectionRef);
//     console.log(data.docs[0].data());
//   };

//   getData();
// }, []);

// return (
//   <>
//     <h1>TESTING PHASE</h1>
//   </>
// );
