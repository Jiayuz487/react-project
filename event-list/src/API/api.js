export const API = (() => {
  const URL = "https://thin-aspiring-bison.glitch.me/events";
  
  const getEvents = () => {
    return fetch(URL).then((res) => res.json());
  };

  const postEvent = (newEvent) => {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  const editEvent = (id, newEvent) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json())
  }
    
  const removeEvent = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json())
  };
    
  return {
    getEvents,
    postEvent,
    editEvent,
    removeEvent,
  };
})();