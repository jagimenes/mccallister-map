import { ItineraryDto } from '../dto/itinerary-request.dto';
import { TramDetailsDto } from '../dto/details';

export function handleTramTicket(ticket: ItineraryDto): string {
  const details = ticket.details as TramDetailsDto;
  let line = `Board the Tram ${details?.number || ''} `;
  line += `from ${ticket.departure.location} to ${ticket.arrival.location}.`;
  return line;
}
