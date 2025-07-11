import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { AirplaneDetailsDto } from '../details';

export class AirplaneSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.AIRPLANE })
  transportType: TransportType.AIRPLANE = TransportType.AIRPLANE;

  @ApiProperty({ type: AirplaneDetailsDto })
  details: AirplaneDetailsDto;
}
