import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const collectionRef = collection(db, "tickets");

const databaSetup = async () => {
  await addDoc(collectionRef, {
    area: "Wellness Center",
    contact: "John Doe",
    description: "Member sweat all over the floor under rowing machine",
    location: "Northwest Branch",
    type: "Custodial",
    submitted: serverTimestamp(),
  });

  await addDoc(collectionRef, {
    area: "Men Locker Room",
    contact: "John Doe",
    description: "sample ticket for Men Locker Room",
    location: "Northwest Branch",
    type: "Maintenance",
    submitted: serverTimestamp(),
  });

  await addDoc(collectionRef, {
    area: "Women Locker Room",
    contact: "John Doe",
    description: "sample ticket for Women Locker Room",
    location: "Northwest Branch",
    type: "Other",
    submitted: serverTimestamp(),
  });

  await addDoc(collectionRef, {
    area: "Family Locker Room",
    contact: "John Doe",
    description: "sample ticket for Family Locker Room",
    location: "Northwest Branch",
    type: "Custodial",
    submitted: serverTimestamp(),
  });

  await addDoc(collectionRef, {
    area: "Front Men Bathroom",
    contact: "John Doe",
    description: "sample ticket for Front Men Bathroom",
    location: "Northwest Branch",
    type: "Maintenance",
    submitted: serverTimestamp(),
  });
};

databaSetup();
