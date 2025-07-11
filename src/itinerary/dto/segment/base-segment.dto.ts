import { ApiProperty } from '@nestjs/swagger';
import {
  ArrivalLocationInfoDto,
  DepartureLocationInfoDto,
} from '../location/location-info.dto';

export class BaseSegmentDto {
  @ApiProperty()
  segmentOrder: number;

  @ApiProperty()
  transportType: string;

  @ApiProperty({ type: DepartureLocationInfoDto })
  departure: DepartureLocationInfoDto;

  @ApiProperty({ type: ArrivalLocationInfoDto })
  arrival: ArrivalLocationInfoDto;
}
