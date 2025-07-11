import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { BusDetailsDto } from '../details';

export class BusSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.BUS })
  transportType: TransportType.BUS = TransportType.BUS;

  @ApiProperty({ type: BusDetailsDto })
  details: BusDetailsDto;
}
