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

  handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === 'destination' ? e.target.value : +e.target.value;

      this.setState({ [field]: value } as Pick<FormState, typeof field>);
    };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправляем:', this.state);

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
    const { id, destination, flightNumber } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={id} onChange={this.handleChange('id')} />
        <input
          type="text"
          value={destination}
          onChange={this.handleChange('destination')}
        />
        <input
          type="text"
          value={flightNumber}
          onChange={this.handleChange('flightNumber')}
        />
        <button type="submit">Add Flight</button>
      </form>
    );
  }
}

export default AddFlightForm;
