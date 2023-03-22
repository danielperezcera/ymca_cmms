import "./TicketInfo.css";
import { areaList } from "../../util/areaList";

export default function TicketInfo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.area.value,
      e.target.type.value,
      e.target.description.value,
      e.target.contact.value
    );
  };

  const handleCancel = () => {
    console.log("Handled the cancel!");
  };

  return (
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
        />

        <button type="submit">Add Ticket</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
