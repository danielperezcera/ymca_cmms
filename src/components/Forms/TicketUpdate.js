import "./TicketUpdate.css";
import { areaList } from "../../util/areaList";
import ReactDom from "react-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const collectionRef = collection(db, "tickets");

export default function TicketUpdate({ open, onClose, ticket }) {
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      // e.target.area.value,
      // e.target.type.value,
      // e.target.description.value,
      // e.target.contact.value
      e.target.value
    );

    // const timeStamp = new Date();

    // await addDoc(collectionRef, {
    //   area: e.target.area.value,
    //   contact: e.target.contact.value,
    //   description: e.target.description.value,
    //   location: "Northwest Branch",
    //   type: e.target.type.value,
    //   submitted: timeStamp,
    // }).then(onClose());
  };

  const handleCancel = () => {
    onClose();
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay1" />
      <div className="center1">
        <div className="formArea1">
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
              {
                <option value={ticket.type} selected>
                  {ticket.type}
                </option>
              }
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
              required
              value={ticket.description}
            ></textarea>

            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              required
              name="contact"
              placeholder="Who is reporting the issue?"
              autoComplete="off"
              value={ticket.contact}
            />

            <label htmlFor="assign">Assign to:</label>
            <input
              type="text"
              id="assign"
              required
              name="assign"
              placeholder="Who should complete the task?"
              autoComplete="off"
              value={ticket.assign}
            />

            <label htmlFor="status">Status:</label>
            <select name="status" id="status">
              {
                <option value={ticket.status} selected>
                  {ticket.status}
                </option>
              }
              <option value="In-Progress">In-Progress</option>
              <option value="Paused">Paused</option>
              <option value="Completed">Completed</option>
            </select>

            <label htmlFor="notes">Notes:</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="5"
              value={ticket.notes}
            ></textarea>

            <button type="submit">SAVE</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
