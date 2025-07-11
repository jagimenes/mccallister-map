import { ItineraryDto } from '../dto/itinerary-request.dto';
import { BusDetailsDto } from '../dto/details';

export function handleBusTicket(ticket: ItineraryDto): string {
  const details = ticket.details as BusDetailsDto;
  let line = `Board the ${details?.number} bus `;
  line += `from ${ticket.departure.location} to ${ticket.arrival.location}.`;
  line += `${details?.seat ? `, seat ${details?.seat}` : ` No seat assignment.`}`;
  return line;
}
