import type { Action, Flight, State } from "./types/types";

let INITIAL_FLIGHT_STATE: State<Flight[]> = { status: "idle" };

const FlightState: Flight = {
  id: 1,
  destination: "Tokyo",
  flightNumber: 3,
  status: { status: "success", data: "Some data" },
};

function App() {
  const app = document.querySelector("#app");
  const button = document.createElement("button");
  button.textContent = "Click";

  const div = document.createElement("div");

  if (!app) return null;

  app.append(button, div);

  function update(state: State<Flight[]>) {
    console.log(state.status === "success");
    if (state.status === "success") {
      console.log(1);
      div.innerHTML = `
      ${state.status}\n
      ${state.data[0].destination}
    `;

      return;
    }

    div.innerHTML = `
      ${state.status}
    `;
  }

  function airportReducer(state: State<Flight[]>, action: Action): State<Flight[]> {
    if (action === "UPDATE_FLIGHT_STATUS") {
      state = { status: "loading" };
    }

    if (action === "FETCH_SUCCESS") {
      state = { status: "success", data: [FlightState] };
    }

    if (action === "FETCH_ERROR") {
      state = { status: "error" };
    }

    return state;
  }

  function handleClick() {
    let state = { ...INITIAL_FLIGHT_STATE };

    airportReducer(state, "UPDATE_FLIGHT_STATUS");
    update(state);

    setTimeout(() => {
      const isError = Math.random() * 1 > 0.5;

      if (!isError) {
        state = airportReducer(state, "FETCH_SUCCESS");
      }

      if (isError) {
        state = airportReducer(state, "FETCH_ERROR");
      }

      update(state);
    }, 1000);
  }

  button.addEventListener("click", handleClick);

  update(INITIAL_FLIGHT_STATE);
}

export default App;
