import type { Flight } from '../types/types';

interface Props {
  flight: Flight;
  handleDelete: (id: number) => void;
}

function FlightItem({ flight, handleDelete }: Props) {
  return (
    <li>
      {flight.destination} - {flight.flightNumber}
      <button onClick={() => handleDelete(flight.id)}>Delete race</button>
    </li>
  );
}

export default FlightItem;
