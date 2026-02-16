import { Component } from 'react';
import type { Action } from '../types/types';

interface FormState {
  id: number;
  destination: string;
  flightNumber: number;
}

class AddFlightForm extends Component<
  { dispatch: (action: Action) => void },
  FormState
> {
  state: FormState = { id: 0, destination: '', flightNumber: 0 };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    if (category === 'id') {
      this.state.id = +e.target.value;
    }
    if (category === 'destination') {
      this.state.destination = e.target.value;
    }
    if (category === 'flightNumber') {
      this.state.flightNumber = +e.target.value;
    }

    this.setState({
      id: this.state.id,
      destination: this.state.destination,
      flightNumber: this.state.flightNumber,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправляем:', this.state.destination);

    this.props.dispatch({
      type: 'ADD_FLIGHT',
      payload: {
        id: this.state.id,
        destination: this.state.destination,
        flightNumber: this.state.flightNumber,
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.handleChange(e, 'id')}
        />
        <input
          type="text"
          value={this.state.destination}
          onChange={(e) => this.handleChange(e, 'destination')}
        />
        <input
          type="text"
          value={this.state.flightNumber}
          onChange={(e) => this.handleChange(e, 'flightNumber')}
        />
        <button type="submit">Add Flight</button>
      </form>
    );
  }
}

export default AddFlightForm;
