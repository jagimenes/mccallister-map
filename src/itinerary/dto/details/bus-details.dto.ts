import { ApiProperty } from '@nestjs/swagger';

export class BusDetailsDto {
  @ApiProperty({ example: 'AF1229', required: true })
  number: string;
  @ApiProperty({ example: '10A', required: true })
  seat: string;
}
