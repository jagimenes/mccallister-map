import { ApiProperty } from '@nestjs/swagger';

export class TramDetailsDto {
  @ApiProperty({ example: 'S5', required: false })
  number?: string;
}
