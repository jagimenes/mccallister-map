import { ApiProperty } from '@nestjs/swagger';

export class BoatDetailsDto {
  @ApiProperty({ example: 'AF1229', required: true })
  seat: string;
}
