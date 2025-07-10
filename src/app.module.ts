import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ItineraryModule } from './itinerary/itinerary.module';

@Module({
  imports: [ItineraryModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
