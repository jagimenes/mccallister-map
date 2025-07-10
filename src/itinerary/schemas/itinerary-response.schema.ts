import z from 'zod';
import { ItinerarySchema } from './itinerary-request.schema';

export const ItineraryResponseSchema = z.object({
  id: z.string(),
  tickets: z.array(ItinerarySchema),
  humanReadable: z.array(z.string()),
  createdAt: z.string().datetime(),
});
