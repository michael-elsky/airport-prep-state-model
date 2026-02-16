import { Component } from 'react';
import type { Flight } from '../types/types';

class FlightItem extends Component<{
  flight: Flight;
  handleDelete: (id: number) => void;
}> {
  render() {
    return (
      <li>
        {this.props.flight.destination} - {this.props.flight.flightNumber}
        <button onClick={() => this.props.handleDelete(this.props.flight.id)}>
          Delete race
        </button>
      </li>
    );
  }
}

export default FlightItem;
