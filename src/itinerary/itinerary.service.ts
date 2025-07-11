import { Injectable, NotFoundException } from '@nestjs/common';
import { ItineraryResponseDto } from './dto/itinerary-response.dto';
import { ItineraryDto } from './dto/itinerary-request.dto';
import { ticketHandlers } from './utils/ticket-handler-map';
import { randomUUID } from 'node:crypto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Itinerary,
  ItineraryDocument,
} from '../database/schemas/itinerary.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectModel(Itinerary.name)
    private readonly itineraryModel: Model<ItineraryDocument>,
  ) {}

  async createItinerary(
    tickets: ItineraryDto[],
  ): Promise<ItineraryResponseDto> {
    const sortedTickets = this.sortTickets(tickets);
    const itinerary: ItineraryResponseDto = {
      id: randomUUID(),
      tickets: sortedTickets,
      humanReadable: this.generateHumanReadable(sortedTickets),
      createdAt: new Date(),
    };

    await this.itineraryModel.create(itinerary);

    return itinerary;
  }

  async getItinerary(id: string): Promise<ItineraryResponseDto> {
    const itinerary = await this.itineraryModel.findOne({ id }).lean();

    if (!itinerary) {
      throw new NotFoundException(`Itinerary with ID "${id}" not found`);
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
