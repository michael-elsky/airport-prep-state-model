export type State<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error' };

// export type Action = "UPDATE_FLIGHT_STATUS" | "FETCH_START" | "FETCH_LOADING" | "FETCH_ERROR" | "FETCH_SUCCESS";

export type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Flight[] }
  | { type: 'FETCH_ERROR'; error: string }
  | { type: 'DELETE_FLIGHT'; payload: number };

export interface Flight {
  id: number;
  destination: string;
  flightNumber: number;
  status?: State<unknown>;
}
