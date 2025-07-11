import { ApiProperty } from '@nestjs/swagger';
import { BaseSegmentDto } from './base-segment.dto';
import { TransportType } from 'src/itinerary/enums/transport-type.enum';
import { TaxiDetailsDto } from '../details';

export class TaxiSegmentDto extends BaseSegmentDto {
  @ApiProperty({ example: TransportType.TAXI })
  transportType: TransportType.TAXI = TransportType.TAXI;

  @ApiProperty({ type: TaxiDetailsDto })
  details: TaxiDetailsDto;
}
