import { ApiProperty } from '@nestjs/swagger';

export class TrainDetailsDto {
  @ApiProperty({ example: '3', required: false })
  platform?: string;

  @ApiProperty({ example: 'RJX 765' })
  number: string;

  @ApiProperty({ example: '17C', required: false })
  seat?: string;
}
