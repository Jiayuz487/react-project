import Event from "./event";
import NewEvent from "./newEvent";

export default function EventList({ events, isAdding }) {
  return (
    <div className="event-list-app__container">
      <table className="event-list-app__table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Start</th>
            <th>End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <Event event={event} key={event.id}></Event>
          ))}
          {isAdding && <NewEvent></NewEvent>}
        </tbody>
      </table>
    </div>
  );
}
