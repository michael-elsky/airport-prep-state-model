import type { Flight } from '../types/types';

const FlightState: Flight[] = [
  {
    id: 1,
    destination: 'Tokyo',
    flightNumber: 23,
    status: { status: 'success', data: 'Some data Tokyo' },
  },
  {
    id: 2,
    destination: 'London',
    flightNumber: 33,
    status: { status: 'success', data: 'Some data London' },
  },
  {
    id: 3,
    destination: 'Paris',
    flightNumber: 53,
    status: { status: 'success', data: 'Some data Paris' },
  },
];

export default FlightState;
