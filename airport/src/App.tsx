import { useState } from 'react';
import type { Flight, State, Action } from './types/types';
import { airportReducer } from './utils/airportReducer';
import FlightState from './data/FlightState';
import FlightList from './components/FlightList';
import Header from './components/Header';
import AddFlightForm from './components/AddFlightForm';

function App() {
  const [state, setState] = useState<State<Flight[]>>({ status: 'idle' });

  function dispatch(action: Action) {
    setState(
      (prevState: State<Flight[]>): State<Flight[]> =>
        airportReducer(prevState, action),
    );
  }

  function handleClick() {
    dispatch({ type: 'FETCH_START' });

    setTimeout(() => {
      const isError = Math.random() * 1 > 0.5;

      if (isError) {
        dispatch({ type: 'FETCH_ERROR', error: 'Some error' });
      } else {
        const data: Flight[] = [...FlightState];
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
    }, 1000);
  }

  function handleDelete(id: number) {
    dispatch({ type: 'DELETE_FLIGHT', payload: id });
  }

  const { status } = state;

  return (
    <>
      <Header handleClick={handleClick} />
      <AddFlightForm dispatch={dispatch} />

      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Some error</p>}
      {status === 'success' && (
        <FlightList state={state} handleDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
