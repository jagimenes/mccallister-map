import { z } from 'zod';
import { TransportType } from '../enums/transport-type.enum';

const TrainDetailsSchema = z.object({
  platform: z.string().optional(),
  number: z.string(),
  seat: z.string().optional(),
});

const FlightDetailsSchema = z.object({
  platform: z.string(),
  gate: z.string(),
  number: z.string(),
  seat: z.string(),
  luggageInstructions: z.string().optional(),
  airline: z.string().optional(),
});

const TramDetailsSchema = z.object({
  number: z.string(),
});

const BusDetailsSchema = z.object({
  number: z.string(),
  seat: z.string(),
});

const BoatDetailsSchema = z.object({
  seat: z.string().optional(),
});

const TaxiDetailsSchema = z.object({
  seat: z.string().optional(),
});

const BaseItineraryFields = {
  departure: z.object({
    location: z.string(),
    time: z.string().datetime(),
  }),
  arrival: z.object({
    location: z.string(),
    time: z.string().datetime().optional(),
  }),
};

export const ItinerarySchema = z.discriminatedUnion('transportType', [
  z.object({
    transportType: z.literal(TransportType.TRAIN),
    ...BaseItineraryFields,
    details: TrainDetailsSchema,
  }),
  z.object({
    transportType: z.literal(TransportType.AIRPLANE),
    ...BaseItineraryFields,
    details: FlightDetailsSchema,
  }),
  z.object({
    transportType: z.literal(TransportType.TRAM),
    ...BaseItineraryFields,
    details: TramDetailsSchema,
  }),
  z.object({
    transportType: z.literal(TransportType.BUS),
    ...BaseItineraryFields,
    details: BusDetailsSchema,
  }),
  z.object({
    transportType: z.literal(TransportType.BOAT),
    ...BaseItineraryFields,
    details: BoatDetailsSchema,
  }),
  z.object({
    transportType: z.literal(TransportType.TAXI),
    ...BaseItineraryFields,
    details: TaxiDetailsSchema,
  }),
]);

export const ItineraryRequestSchema = z.object({
  tickets: z.array(ItinerarySchema),
});
