import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { TrainDetailsDto } from '../details';

export class TrainSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.TRAIN })
  transportType: TransportType.TRAIN = TransportType.TRAIN;

  @ApiProperty({ type: TrainDetailsDto })
  details: TrainDetailsDto;
}
