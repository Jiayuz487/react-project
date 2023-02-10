import { useContext } from "react";
import AppContext from "../context/appContext";

export default function AddButton() {
  const context = useContext(AppContext);

  function handleAdd() {
    context.setIsAdding(true);
  }

  return (
    <button className="event-list-app__btn" onClick={handleAdd}>
      Add New Event
    </button>
  );
}
