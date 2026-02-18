import { useState } from 'react';
import type { Action } from '../types/types';

interface FormState {
  id: number;
  destination: string;
  flightNumber: number;
}

interface Props {
  dispatch: (action: Action) => void;
}

const INITIAL_STATE: FormState = { id: 0, destination: '', flightNumber: 0 };

function AddFlightForm({ dispatch }: Props) {
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === 'destination' ? e.target.value : +e.target.value;

      setFormState((prevState) => {
        return {
          ...prevState,
          [field]: value,
        };
      });
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Отправляем:', formState);

    dispatch({
      type: 'ADD_FLIGHT',
      payload: {
        id: formState.id,
        destination: formState.destination,
        flightNumber: formState.flightNumber,
      },
    });
  }

  const { id, destination, flightNumber } = formState;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={handleChange('id')} />
      <input
        type="text"
        value={destination}
        onChange={handleChange('destination')}
      />
      <input
        type="text"
        value={flightNumber}
        onChange={handleChange('flightNumber')}
      />
      <button type="submit">Add Flight</button>
    </form>
  );
}

export default AddFlightForm;
