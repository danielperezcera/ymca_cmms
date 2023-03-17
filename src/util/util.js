import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function localModelInit(Branch) {
  //Reference for the database and collection to be used.
  //  db initialized in firebase.js
  const areaRef = collection(db, "tickets");

  // Firestore method to get documents from a collection
  const data = await getDocs(areaRef);

  //Loops through the received documents and sorts them into
  //  the area list inside the Branch object
  data.forEach((doc) => {
    Branch.areaList[`${doc.data().area}`].addTicket(doc.id, doc.data());
  });
}
