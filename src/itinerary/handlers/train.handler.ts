import { ItineraryDto } from '../dto/itinerary-request.dto';
import { TrainDetailsDto } from '../dto/details';

export function handleTrainTicket(ticket: ItineraryDto): string {
  const details = ticket.details as TrainDetailsDto;
  let line = `Board train ${details?.number || ''}, `;
  if (details?.platform) line += `Platform ${details.platform} `;
  line += `from ${ticket.departure.location} to ${ticket.arrival.location}.`;
  if (details?.seat) line += ` Seat number ${details.seat}.`;
  return line;
}
