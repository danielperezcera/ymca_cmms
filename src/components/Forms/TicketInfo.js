import "./TicketInfo.css";
import { areaList } from "../../util/areaList";
import ReactDom from "react-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const collectionRef = collection(db, "tickets");

export default function TicketInfo({ open, onClose }) {
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      e.target.area.value,
      e.target.type.value,
      e.target.description.value,
      e.target.contact.value
    );

    const timeStamp = new Date();

    await addDoc(collectionRef, {
      area: e.target.area.value,
      contact: e.target.contact.value,
      description: e.target.description.value,
      location: "Northwest Branch",
      type: e.target.type.value,
      submitted: timeStamp,
    }).then(onClose());
  };

  const handleCancel = () => {
    onClose();
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="formArea">
        <h2>Add New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="area">Area:</label>
          <select name="area" id="area">
            {areaList.map((area) => {
              return (
                <option key={area} value={area}>
                  {area}
                </option>
              );
            })}
          </select>
          {/* <input
          type="text"
          id="area"
          name="area"
          required
          placeholder="Where in the building is the issue located?"
        /> */}

          <label htmlFor="type">Type:</label>
          <select name="type" id="type">
            <option value="Custodial">Custodial</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>

          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            required
            name="contact"
            placeholder="Who is reporting the issue?"
            autoComplete="off"
          />

          <button type="submit">Add Ticket</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
