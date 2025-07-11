import { ItineraryDto } from '../dto/itinerary-request.dto';
import { BoatDetailsDto } from '../dto/details';

export function handleBoatTicket(ticket: ItineraryDto): string {
  const details = ticket.details as BoatDetailsDto;
  let line = `Take ${ticket.transportType} from ${ticket.departure.location} to ${ticket.arrival.location}.`;
  line += `${details?.seat ? `, seat ${details?.seat}` : ` No seat assignment.`}`;
  return line;
}
