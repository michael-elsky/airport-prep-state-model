import type { Flight, State } from '../types/types';
import FlightItem from './FlightItem';

type Props = {
  state: State<Flight[]>;
  handleDelete: (id: number) => void;
};

function FlightList({ state, handleDelete }: Props) {
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

export default FlightList;
