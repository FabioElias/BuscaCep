import { useState } from "react";
import "./App.css";
import TrackCep from "./TrackCep";

function App() {
  const [events, setEvents] = useState([]);

  const converToArray = (obj) => {
    const arr = [obj];
    return arr;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch(
      `https://localhost:44343/teste/desenvolvedor/v1/correios/cep/${data.tracking}`
    )
      .then((response) => response.json())
      .then((data) => {
        const address = converToArray(data);
        setEvents(address);
      })
      .catch((error) => console.error);
  };
  return (
    <div className="container col-md-8 ">
      <h1 className="text-center">Buscar CEP</h1>
      <form onSubmit={submitHandler} class="form-inline">
        <div class="form-group mb-2">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" name="trackCep" className="btn btn-primary ">
          Buscar
        </button>
      </form>
      <TrackCep events={events} />
    </div>

    
  );
}

export default App;
