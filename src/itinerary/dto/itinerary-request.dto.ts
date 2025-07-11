import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { TransportType } from '../enums/transport-type.enum';
import {
  ArrivalLocationInfoDto,
  DepartureLocationInfoDto,
} from './location/location-info.dto';

import {
  AirplaneSegmentDto,
  BoatSegmentDto,
  BusSegmentDto,
  TaxiSegmentDto,
  TrainSegmentDto,
  TramSegmentDto,
} from './segment';
import {
  AirplaneDetailsDto,
  BoatDetailsDto,
  BusDetailsDto,
  TaxiDetailsDto,
  TrainDetailsDto,
  TramDetailsDto,
} from './details';

export type AllSegmentDetails =
  | TrainDetailsDto
  | AirplaneDetailsDto
  | TramDetailsDto
  | BusDetailsDto
  | TaxiDetailsDto
  | BoatDetailsDto;

@ApiExtraModels(
  TrainDetailsDto,
  AirplaneDetailsDto,
  TramDetailsDto,
  BusDetailsDto,
  TaxiDetailsDto,
  BoatDetailsDto,
)
export class ItineraryDto {
  @ApiProperty({ enum: TransportType, example: TransportType.TRAIN })
  transportType: TransportType;

  @ApiProperty({ type: DepartureLocationInfoDto })
  departure: DepartureLocationInfoDto;

  @ApiProperty({ type: () => ArrivalLocationInfoDto })
  arrival: ArrivalLocationInfoDto;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(TrainDetailsDto) },
      { $ref: getSchemaPath(AirplaneDetailsDto) },
      { $ref: getSchemaPath(TramDetailsDto) },
      { $ref: getSchemaPath(BusDetailsDto) },
      { $ref: getSchemaPath(TaxiDetailsDto) },
      { $ref: getSchemaPath(BoatDetailsDto) },
    ],
  })
  details: any;
}

@ApiExtraModels(
  TrainSegmentDto,
  AirplaneSegmentDto,
  TramSegmentDto,
  BusSegmentDto,
  TaxiSegmentDto,
  BoatSegmentDto,
)
export class ItineraryRequestDto {
  @ApiProperty({
    type: 'array',
    oneOf: [
      { $ref: getSchemaPath(TrainSegmentDto) },
      { $ref: getSchemaPath(AirplaneSegmentDto) },
      { $ref: getSchemaPath(TramSegmentDto) },
      { $ref: getSchemaPath(BusSegmentDto) },
      { $ref: getSchemaPath(TaxiSegmentDto) },
      { $ref: getSchemaPath(BoatSegmentDto) },
    ],
  })
  tickets: Array<
    | TrainSegmentDto
    | AirplaneSegmentDto
    | TramSegmentDto
    | BusSegmentDto
    | TaxiSegmentDto
    | BoatSegmentDto
  >;
}
