import { Component } from 'react';
import type { Flight, State } from '../types/types';
import FlightItem from './FlightItem';

type Props = {
  state: State<Flight[]>;
  handleDelete: (id: number) => void;
};

class FlightList extends Component<Props> {
  render() {
    const { state, handleDelete } = this.props;

    if (!('data' in state)) {
      return <ul />;
    }

    return (
      <ul>
        {state.data.map((flight: Flight) => {
          return (
            <FlightItem
              key={flight.id}
              flight={flight}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default FlightList;
