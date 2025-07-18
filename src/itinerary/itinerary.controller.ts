import { Controller, Post, Body, HttpStatus, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { ItineraryRequestDto } from './dto/itinerary-request.dto';
import { ItineraryResponseDto } from './dto/itinerary-response.dto';
import { ItineraryRequestSchema } from './schemas/itinerary-request.schema';
import { ZodValidationPipe } from 'src/core/zod-validation.pipe';
import { itineraryMocks } from './mocks/itinerary.mocks';
import { ItineraryService } from './itinerary.service';

@ApiTags('Itinerary')
@Controller('itinerary')
export class ItineraryController {
  constructor(private readonly itineraryService: ItineraryService) {}

  @Post()
  @ApiOperation({
    summary: 'Create human-readable itinerary from tickets',
    description:
      'Converts unsorted travel tickets into a properly ordered itinerary with human-readable steps',
  })
  @ApiBody({
    type: ItineraryRequestDto,
    examples: itineraryMocks.request,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: ItineraryResponseDto,
    description: 'Successfully created itinerary',
    examples: itineraryMocks.response,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid ticket data format',
  })
  createItinerary(
    @Body(new ZodValidationPipe(ItineraryRequestSchema))
    body: ItineraryRequestDto,
  ): Promise<ItineraryResponseDto> {
    const { tickets } = body;
    return this.itineraryService.createItinerary(tickets);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get itinerary by ID' })
  @ApiParam({ name: 'id', example: 'abc123' })
  @ApiResponse({
    status: 200,
    description: 'Itinerary found',
    type: ItineraryResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Itinerary not found' })
  async getById(@Param('id') id: string): Promise<ItineraryResponseDto> {
    const itinerary = await this.itineraryService.getItinerary(id);

    return itinerary;
  }
}
