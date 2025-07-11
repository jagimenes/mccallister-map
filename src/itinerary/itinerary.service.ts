import { Injectable } from '@nestjs/common';
import { ItineraryResponseDto } from './dto/itinerary-response.dto';
import { ItineraryDto } from './dto/itinerary-request.dto';
import { ticketHandlers } from './utils/ticket-handler-map';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ItineraryService {
  private itineraries: Record<string, ItineraryResponseDto> = {};

  createItinerary(tickets: ItineraryDto[]): ItineraryResponseDto {
    const sortedTickets = this.sortTickets(tickets);
    const itinerary: ItineraryResponseDto = {
      id: randomUUID(),
      tickets: sortedTickets,
      humanReadable: this.generateHumanReadable(sortedTickets),
      createdAt: new Date(),
    };
    this.itineraries[itinerary.id] = itinerary;
    return itinerary;
  }

  getItinerary(id: string): ItineraryResponseDto {
    const itinerary = this.itineraries[id];
    if (!itinerary) {
      throw new Error('Itinerary not found');
    }
    return itinerary;
  }

  sortTickets(tickets: ItineraryDto[]): ItineraryDto[] {
    return [...tickets].sort((a, b) => {
      const timeA = new Date(a.departure.time).getTime();
      const timeB = new Date(b.departure.time).getTime();
      return timeA - timeB;
    });
  }

  private generateHumanReadable(tickets: ItineraryDto[]): string[] {
    const lines = ['0. Start.'];

    tickets.forEach((ticket, index) => {
      const handler = ticketHandlers[ticket.transportType];
      const line = `${index + 1}. ${handler(ticket)}`;
      lines.push(line);
    });

    lines.push(`${tickets.length + 1}. Last destination reached.`);
    return lines;
  }
}
