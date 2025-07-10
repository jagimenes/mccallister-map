import { ApiProperty } from '@nestjs/swagger';
import { TransportType } from '../enums/transport-type.enum';

class DepartureArrivalDto {
  @ApiProperty({ example: 'St. Anton' })
  location: string;

  @ApiProperty({ required: false, example: '3' })
  platform?: string;

  @ApiProperty({ required: false, example: '17C' })
  seat?: string;

  @ApiProperty({ type: Date, example: '2023-12-24T08:00:00Z' })
  time: string;
}

export class ItineraryDto {
  @ApiProperty({ enum: TransportType, example: TransportType.TRAIN })
  transportType: TransportType;

  @ApiProperty({ type: DepartureArrivalDto })
  departure: DepartureArrivalDto;

  @ApiProperty({ type: () => DepartureArrivalDto })
  arrival: DepartureArrivalDto;

  @ApiProperty({
    example: 'Luggage will transfer automatically from the last flight',
  })
  details?: string;
}

export class ItineraryRequestDto {
  @ApiProperty({ type: [ItineraryDto] })
  tickets: ItineraryDto[];
}
