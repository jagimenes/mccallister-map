import { ApiProperty } from '@nestjs/swagger';
import { ItineraryDto } from './itinerary-request.dto';

export class ItineraryResponseDto {
  @ApiProperty({ example: '123' })
  id: string;

  @ApiProperty({ type: [ItineraryDto] })
  tickets: ItineraryDto[];

  @ApiProperty({
    type: [String],
    example: [
      '0. Start.',
      '1. Board train RJX 765, Platform 3 from St. Anton am Arlberg Bahnhof to Innsbruck Hbf. Seat number 17C.',
      '2. Board the Tram S5 from Innsbruck Hbf to Innsbruck Airport.',
      '3. From Innsbruck Airport, board the flight AA904 to Venice Airport from gate 10, seat 18B. Self-check-in luggage at counter.',
      '4. Board train ICN 35780, Platform 1 from Gara Venetia Santa Lucia to Bologna San Ruffillo. Seat number 13F.',
      '5. Board the airport bus from Bologna San Ruffillo to Bologna Guglielmo Marconi Airport. No seat assignment.',
      '6. From Bologna Guglielmo Marconi Airport, board the flight AF1229 to Paris CDG Airport from gate 22, seat 10A. Self-check-in luggage at counter.',
      "7. From Paris CDG Airport, board the flight AF136 to Chicago O'Hare from gate 32, seat 10A. Luggage will transfer automatically from the last flight.",
      '8. Last destination reached.',
    ],
  })
  humanReadable: string[];

  @ApiProperty({ type: Date, example: '2023-12-24T08:00:00Z' })
  createdAt: Date;
}
