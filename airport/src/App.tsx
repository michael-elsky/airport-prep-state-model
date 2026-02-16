import { Component } from 'react';
import type { Flight, State, Action } from './types/types';
import { airportReducer } from './utils/airportReducer';
import FlightState from './data/FlightState';
import FlightList from './components/FlightList';
import Header from './components/Header';
import AddFlightForm from './components/AddFlightForm';

class App extends Component {
  state: State<Flight[]> = { status: 'idle' };

  dispatch(action: Action) {
    this.setState(
      (prevState: State<Flight[]>): State<Flight[]> =>
        airportReducer(prevState, action),
    );
  }

  componentDidMount(): void {
    this.handleClick();
  }

  handleClick = () => {
    this.dispatch({ type: 'FETCH_START' });

    setTimeout(() => {
      const isError = Math.random() * 1 > 0.5;

      if (isError) {
        this.dispatch({ type: 'FETCH_ERROR', error: 'Some error' });
      } else {
        const data: Flight[] = [...FlightState];
        this.dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
    }, 1000);
  };

  handleDelete = (id: number) => {
    this.dispatch({ type: 'DELETE_FLIGHT', payload: id });
  };

  render() {
    const { status } = this.state;

    return (
      <>
        <Header handleClick={this.handleClick} />
        <AddFlightForm dispatch={this.dispatch} />

        {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p>Some error</p>}
        {status === 'success' && (
          <FlightList state={this.state} handleDelete={this.handleDelete} />
        )}
      </>
    );
  }
}

export default App;
