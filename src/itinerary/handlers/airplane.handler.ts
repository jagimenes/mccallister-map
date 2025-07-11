import { ItineraryDto } from '../dto/itinerary-request.dto';
import { AirplaneDetailsDto } from '../dto/details';

export function handleAirplaneTicket(ticket: ItineraryDto): string {
  const details = ticket.details as AirplaneDetailsDto;
  let line = `From ${ticket.departure.location}, board the flight ${details?.number || ''} `;
  line += `to ${ticket.arrival.location}`;
  if (details?.gate) {
    line += ` from gate ${details?.gate}`;
  }
  if (details?.seat) {
    line += `, seat ${details?.seat}`;
  }
  if (details?.luggageInstructions) {
    line += `. ${details?.luggageInstructions}`;
  }
  return line;
}
