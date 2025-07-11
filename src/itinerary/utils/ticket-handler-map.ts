import { TransportType } from '../enums/transport-type.enum';
import { ItineraryDto } from '../dto/itinerary-request.dto';
import {
  handleAirplaneTicket,
  handleBoatTicket,
  handleBusTicket,
  handleTaxiTicket,
  handleTrainTicket,
  handleTramTicket,
} from '../handlers';

export const ticketHandlers: Record<
  TransportType,
  (ticket: ItineraryDto) => string
> = {
  [TransportType.TRAIN]: handleTrainTicket,
  [TransportType.AIRPLANE]: handleAirplaneTicket,
  [TransportType.TRAM]: handleTramTicket,
  [TransportType.BUS]: handleBusTicket,
  [TransportType.TAXI]: handleTaxiTicket,
  [TransportType.BOAT]: handleBoatTicket,
};
