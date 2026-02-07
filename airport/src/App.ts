import type { Action, Flight, State } from "./types/types";

const INITIAL_FLIGHT_STATE: State<Flight[]> = { status: "idle" };

// const FlightState: Flight = {
//   id: 1,
//   destination: "Tokyo",
//   flightNumber: 3,
//   status: { status: "success", data: "Some data" },
// };

const FlightState: Flight[] = [
  {
    id: 1,
    destination: "Tokyo",
    flightNumber: 23,
    status: { status: "success", data: "Some data Tokyo" },
  },
  {
    id: 2,
    destination: "London",
    flightNumber: 33,
    status: { status: "success", data: "Some data London" },
  },
  {
    id: 3,
    destination: "Paris",
    flightNumber: 53,
    status: { status: "success", data: "Some data Paris" },
  },
];

function App() {
  const app = document.querySelector("#app");
  const button = document.createElement("button");
  button.textContent = "Click";

  const div = document.createElement("div");

  if (!app) return null;

  app.append(button, div);

  function deleteRace(state: State<Flight[]>, raceId: number) {
    state = airportReducer(state, { type: "DELETE_FLIGHT", payload: raceId });

    update(state);
  }

  function update(state: State<Flight[]>) {
    div.innerHTML = "";

    if (state.status === "success") {
      for (let i = 0; i < state.data.length; i++) {
        const p = document.createElement("p");
        const button = document.createElement("button");

        button.textContent = "Delete race";
        button.addEventListener("click", () => deleteRace(state, state.data[i].id));

        p.textContent = `Destination: ${state.data[i].destination} - ${state.status}`;

        div.append(p, button);
      }

      return null;
    }

    div.innerHTML = `
      ${state.status}
    `;

    return null;
  }

  function airportReducer(state: State<Flight[]>, action: Action): State<Flight[]> {
    switch (action.type) {
      case "FETCH_START":
        return { status: "loading" };

      case "FETCH_SUCCESS":
        return { status: "success", data: action.payload };

      case "FETCH_ERROR":
        return { status: "error" };

      case "DELETE_FLIGHT":
        if (state.status !== "success") return state;

        return {
          ...state,
          data: state.data.filter(race => race.id !== action.payload),
        };
    }

    return state;
  }

  function handleClick() {
    let state = airportReducer(INITIAL_FLIGHT_STATE, { type: "FETCH_START" });

    update(state);

    setTimeout(() => {
      const isError = Math.random() * 1 > 0.5;

      if (!isError) {
        state = airportReducer(state, { type: "FETCH_SUCCESS", payload: FlightState });
      }

      if (isError) {
        state = airportReducer(state, { type: "FETCH_ERROR", error: "Some error" });
      }

      update(state);
    }, 1000);
  }

  button.addEventListener("click", handleClick);

  update(INITIAL_FLIGHT_STATE);
}

export default App;
