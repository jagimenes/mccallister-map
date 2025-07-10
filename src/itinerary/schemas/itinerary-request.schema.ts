import { z } from 'zod';
import { transportTypesAsArray } from '../enums/transport-type.enum';

export const ItinerarySchema = z.object({
  transportType: z.enum(transportTypesAsArray),
  departure: z.object({
    location: z.string(),
    platform: z.string().optional(),
    seat: z.string().optional(),
    time: z.string().datetime(),
  }),
  arrival: z.object({
    location: z.string(),
  }),
  details: z.record(z.string()).optional(),
});

export const ItineraryRequestSchema = z.object({
  tickets: z.array(ItinerarySchema),
});
