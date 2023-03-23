import "./TicketUpdate.css";
import { areaList } from "../../util/areaList";
import ReactDom from "react-dom";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

export default function TicketUpdate({ open, onClose, ticket }) {
  const [area, setArea] = useState(ticket.area);
  const [type, setType] = useState(ticket.type);
  const [description, setDescription] = useState(ticket.description);
  const [contact, setContact] = useState(ticket.contact);
  const [assign, setAssign] = useState(ticket.assign ? ticket.assign : "");
  const [status, setStatus] = useState(ticket.status ? ticket.status : "");
  const [notes, setNotes] = useState(ticket.notes ? ticket.notes : "");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   ticket.id,
    //   // e.target.area.value,
    //   // e.target.type.value,
    //   // e.target.description.value,
    //   // e.target.contact.value
    //   e.target.notes.value
    // );
    const ticketRef = doc(db, "tickets", ticket.id);
    // const timeStamp = new Date();

    await updateDoc(ticketRef, {
      contact: e.target.contact.value,
      description: e.target.description.value,
      type: e.target.type.value,
      assign: e.target.assign.value,
      status: e.target.status.value,
      notes: e.target.notes.value,
    }).then(onClose());
  };

  const handleCancel = () => {
    onClose();
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay1" />
      <div className="center1">
        <div className="formArea1">
          <h2>Update Ticket</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="area">Area:</label>
            <select name="area" id="area" disabled>
              <option key={area} value={area} defaultValue readOnly>
                {area}
              </option>
            </select>
            {/* <input
          type="text"
          id="area"
          name="area"
          required
          placeholder="Where in the building is the issue located?"
        /> */}

            <label htmlFor="type">Type:</label>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              {
                <option value={type} defaultValue>
                  {type}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              required
              name="contact"
              placeholder="Who is reporting the issue?"
              autoComplete="off"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <label htmlFor="assign">Assign to:</label>
            <input
              type="text"
              id="assign"
              required
              name="assign"
              placeholder="Who should complete the task?"
              autoComplete="off"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
            />

            <label htmlFor="status">Status:</label>
            <select
              name="status"
              id="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              {
                <option value={status} defaultValue>
                  {status}
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
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
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
