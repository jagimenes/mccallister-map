import { Module } from '@nestjs/common';
import { ItineraryController } from './itinerary.controller';

@Module({
  controllers: [ItineraryController],
  providers: [],
})
export class ItineraryModule {}
