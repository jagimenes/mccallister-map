import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ItineraryDto } from 'src/itinerary/dto/itinerary-request.dto';

export type ItineraryDocument = Itinerary & Document;

@Schema({ timestamps: true })
export class Itinerary {
  @Prop({ required: true })
  id: string;

  @Prop({ type: Array, required: true })
  tickets: ItineraryDto[];

  @Prop({ type: [String], required: true })
  humanReadable: string[];

  @Prop({ type: Date, required: true })
  createdAt: Date;
}

export const ItinerarySchema = SchemaFactory.createForClass(Itinerary);
