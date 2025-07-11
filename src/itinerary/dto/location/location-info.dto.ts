import { ApiProperty } from '@nestjs/swagger';

export class DepartureLocationInfoDto {
  @ApiProperty({ example: 'St. Anton am Arlberg Bahnhof' })
  location: string;

  @ApiProperty({ example: '2023-12-24T08:00:00Z', required: true })
  time: string;
}

export class ArrivalLocationInfoDto {
  @ApiProperty({ example: 'St. Anton am Arlberg Bahnhof' })
  location: string;

  @ApiProperty({ example: '2023-12-24T08:00:00Z', required: false })
  time?: string;
}
