export interface Flight {
  id: number;
  destination: string;
  flightNumber: number;
  status: string;
}

export type State<T> = { status: "idle" } | { status: "loading" } | { status: "success"; data: T } | { status: "error" };

export type Action = "UPDATE_FLIGHT_STATUS" | "FETCH_START" | "FETCH_LOADING" | "FETCH_ERROR" | "FETCH_SUCCESS";
