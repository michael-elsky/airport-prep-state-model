import type { Action, Flight, State } from "../types/types";

export function airportReducer(
  state: State<Flight[]>,
  action: Action,
): State<Flight[]> {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'loading' };

    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload };

    case 'FETCH_ERROR':
      return { status: 'error' };

    case 'DELETE_FLIGHT':
      if (state.status !== 'success') return state;

      return {
        ...state,
        data: state.data.filter((race) => race.id !== action.payload),
      };
  }

  return state;
}
