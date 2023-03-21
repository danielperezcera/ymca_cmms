import "./Ticket.css";

export default function Ticket({ ticket }) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timezone: "EDT",
  };
  const date = ticket.submitted.toDate().toLocaleString("en-US", options);

  return (
    <>
      <div className="ticket">
        <h3>{ticket.type}</h3>
        <p id="date">{date}</p>
        <p>
          {ticket.contact}: {ticket.description}
        </p>
      </div>
    </>
  );
}
