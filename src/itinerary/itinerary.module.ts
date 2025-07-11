import { Module } from '@nestjs/common';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Itinerary,
  ItinerarySchema,
} from 'src/database/schemas/itinerary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Itinerary.name, schema: ItinerarySchema },
    ]),
  ],
  controllers: [ItineraryController],
  providers: [ItineraryService],
})
export class ItineraryModule {}
