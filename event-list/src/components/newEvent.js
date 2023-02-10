import AppContext from "../context/appContext";
import { addIcon, cancelIcon } from "./icon";
import { useContext, useState } from "react";

export default function NewEvent() {
  const context = useContext(AppContext);

  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleEventNameChange(event) {
    setEventName(event.target.value);
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function handlecancel() {
    context.setIsAdding(false);
  }

  function handleAdd() {
    context.addEvent({
      eventName: eventName,
      startDate: startDate,
      endDate: endDate,
    });
  }

  return (
    <>
      <tr className="event">
        <th>
          <input value={eventName} onChange={handleEventNameChange}></input>
        </th>
        <th>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          ></input>
        </th>
        <th>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
          ></input>
        </th>
        <th>
          <button className="event__btn-add" onClick={handleAdd}>
            {addIcon}
          </button>
          <button className="event__btn-cancel" onClick={handlecancel}>
            {cancelIcon}
          </button>
        </th>
      </tr>
    </>
  );
}
