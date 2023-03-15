import { useEffect } from "react";
import "./App.css";
import { db } from "./firebase.js";
import { collection, getDocs, get } from "firebase/firestore";
import Dashboard from "./components/Dashboard/Dashboard";

const areaRef = collection(db, "tickets");

// const wellnessDocs = await get(areaRef);

// console.log(wellnessDocs.data());
// console.log("data");

function App() {
  // const firebaseCollectionRef = collection(db, "Areas");
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(areaRef);
      data.forEach((doc) => {
        console.log(doc.id, " ---> ", doc.data());
      });
    };

    getData();
  }, []);

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
