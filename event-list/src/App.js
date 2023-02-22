import "./styles/App.sass";
import { API } from "./API/api";
import AppContext from "./context/appContext";
import EventList from "./components/eventList";
import AddButton from "./components/addButton";
import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    API.getEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  function addEvent(newEvent) {
    API.postEvent(newEvent).then((addedEvent) => {
      setEvents([...events, addedEvent]);
      setIsAdding(false);
    })
  }

  function deleteEvent(eventID) {
    API.removeEvent(eventID).then(() => {
      setEvents(events.filter(event => event.id !== eventID));
    })
  }

  function updateEvent(eventID, newEvent) {
    API.editEvent(eventID, newEvent).then((newEvent) => {
      setEvents(events.map((event) => {
        if (event.id === eventID) {
          return newEvent;
        }
        return event;
      }))
    })
  }

  return (
    <AppContext.Provider
      value={{ setIsAdding, addEvent, deleteEvent, updateEvent }}
    >
      <div className="event-list-app">
        <AddButton></AddButton>
        <EventList
          events={events}
          isAdding={isAdding}
        ></EventList>
      </div>
    </AppContext.Provider>
  );
}

export default App;
