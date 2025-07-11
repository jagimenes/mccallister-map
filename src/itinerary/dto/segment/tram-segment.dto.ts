import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { TramDetailsDto } from '../details';

export class TramSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.TRAM })
  transportType: TransportType.TRAM = TransportType.TRAM;

  @ApiProperty({ type: TramDetailsDto })
  details: TramDetailsDto;
}
