import { ItineraryDto } from '../dto/itinerary-request.dto';

export function handleTaxiTicket(ticket: ItineraryDto): string {
  const line = `Take ${ticket.transportType} from ${ticket.departure.location} to ${ticket.arrival.location}.`;
  return line;
}
