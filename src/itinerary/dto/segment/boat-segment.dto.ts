import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { BoatDetailsDto } from '../details';

export class BoatSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.BOAT })
  transportType: TransportType.BOAT = TransportType.BOAT;

  @ApiProperty({ type: BoatDetailsDto })
  details: BoatDetailsDto;
}
