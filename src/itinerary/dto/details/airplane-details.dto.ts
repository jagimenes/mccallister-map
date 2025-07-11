import { ApiProperty } from '@nestjs/swagger';

export class AirplaneDetailsDto {
  @ApiProperty({ example: '3', required: true })
  platform: string;

  @ApiProperty({ example: '22', required: true })
  gate: string;

  @ApiProperty({ example: 'AF1229', required: true })
  number: string;

  @ApiProperty({ example: '10A', required: true })
  seat: string;

  @ApiProperty({ example: 'Self-check-in luggage at counter', required: false })
  luggageInstructions?: string;

  @ApiProperty({ example: 'Air France', required: false })
  airline?: string;
}
