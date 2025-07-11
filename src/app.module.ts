import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ItineraryModule } from './itinerary/itinerary.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost:27017/mccallister-db',
    ),
    ItineraryModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
