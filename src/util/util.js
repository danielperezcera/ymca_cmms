import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { areaList, Branch } from "./areaList";

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

export const updateData = async (setLoading) => {
  const areaRef = collection(db, "tickets");
  const modelInit = new Branch(areaList);

  //await for the data received by getDocs, then change state to trigger re-render
  const data = await getDocs(areaRef).then(setLoading(false));

  //load the response into the local model (Branch class)
  data.forEach((doc) => {
    modelInit.areaList[`${doc.data().area}`].addTicket(doc.id, doc.data());
  });

  //Load the database response into context to properly share
  // Northwest.setBranch(modelInit);

  //return the updated model
  return modelInit;
};
