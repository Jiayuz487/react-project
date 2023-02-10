import React, { useState, useContext } from "react";
import { cancelIcon, editIcon, deleteIcon, saveIcon } from "./icon";
import AppContext from "../context/appContext";

export default function Event({ event }) {
  const context = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  const [eventName, setEventName] = useState(event.eventName);
  const [startDate, setStartDate] = useState(event.startDate);
  const [endDate, setEndDate] = useState(event.endDate);

  function handleEventNameChange(event) {
    setEventName(event.target.value);
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function handleEdit() {
    if (isEditing) {
      context.updateEvent(event.id, {
        eventName: eventName,
        startDate: startDate,
        endDate: endDate,
      });
    }
    setIsEditing(!isEditing);
  }

  function handleDelete() {
    if (isEditing) {
      setIsEditing(!isEditing);
    } else {
      context.deleteEvent(event.id);
    }
  }

  return (
    <>
      <tr className="event">
        <th>
          {isEditing ? (
            <input value={eventName} onChange={handleEventNameChange}></input>
          ) : (
            event.eventName
          )}
        </th>
        <th>
          {isEditing ? (
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            ></input>
          ) : (
            event.startDate
          )}
        </th>
        <th>
          {isEditing ? (
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            ></input>
          ) : (
            event.endDate
          )}
        </th>
        <th>
          <button className="event__btn-edit" onClick={handleEdit}>
            {isEditing ? saveIcon : editIcon}
          </button>
          <button className="event__btn-delete" onClick={handleDelete}>
            {isEditing ? cancelIcon : deleteIcon}
          </button>
        </th>
      </tr>
    </>
  );
}
