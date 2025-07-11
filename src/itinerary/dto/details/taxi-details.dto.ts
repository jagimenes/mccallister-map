import { ApiProperty } from '@nestjs/swagger';

export class TaxiDetailsDto {
  @ApiProperty({ example: '2', required: true })
  seat?: string;
}
