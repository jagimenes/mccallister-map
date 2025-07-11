# Itinerary API (McCallister Map)

API for organizing and managing travel itineraries with multiple transport types.

See the app in action: [McCallister Map](https://mccallister-map.onrender.com/swagger)

---

## Motivation for Folder Structure

I organized the code to facilitate maintenance, extensibility, and clarity:

- **dto/details/**: Contains DTO classes specific to details of each transport type (e.g., `TrainDetailsDto`, `AirplaneDetailsDto`). This isolates particular properties of each transport.
- **dto/segment/**: Contains DTOs representing itinerary segments, each associated with a transport type (e.g., `TrainSegmentDto`, `AirplaneSegmentDto`). This allows applying specific validation and documentation.
- **utils/handlers/**: Functions responsible for processing segments according to transport type, e.g., generating human-readable strings. This separation enables adding new handlers easily without cluttering the main service.

This modular separation prepares the codebase for future expansions.

---

## Technologies Used

- **NestJS — Modular and scalable Node.js backend framework.
- **TypeScript** — Static typing for safety and autocomplete.
- **Mongoose** — ODM for MongoDB, for itinerary persistence.
- **Zod** — Data validation and schema definition.
- **Swagger** — Automatic API documentation.
- **Docker + Docker Compose** — For consistent local environment and deployment.

---

## Example CURL Request to Create an Itinerary

```bash
curl -X POST http://localhost:3000/itineraries -H 'Content-Type: application/json' -d '{
  "tickets": [
    {
      "transportType": "train",
      "departure": {
        "location": "St. Anton am Arlberg Bahnhof",
        "time": "2023-12-24T08:00:00Z"
      },
      "arrival": {
        "location": "Innsbruck Hbf"
      },
      "details": {
				"platform": "3",
        "number": "RJX 765",
        "seat": "17C"
      }
    },
    {
      "transportType": "tram",
      "departure": {
        "location": "Innsbruck Hbf",
        "time": "2023-12-24T10:30:00Z"
      },
      "arrival": {
        "location": "Innsbruck Airport"
      },
      "details": {
        "number": "S5"
      }
    },
    {
      "transportType": "airplane",
      "departure": {
        "location": "Innsbruck Airport",
        "time": "2023-12-24T12:15:00Z"
      },
      "arrival": {
        "location": "Venice Airport"
      },
      "details": {
        "number": "AA904",
				"platform": "3",
				"gate": "22",
        "seat": "18B",
        "luggageInstructions": "Self-check-in luggage at counter"
      }
    }
  ]
}'
```

---

## How to Run the Project Locally

1. Clone the repository

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Create a `.env` file in the root with necessary environment variables, for example:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mccallister-db
```

3. Install dependencies

```bash
npm install
```

4. Run docker compose

```bash
docker compose up --build
```

5. Access the Swagger documentation at

```
http://localhost:3000/swagger
```

---

## How to Add a New Transport Type

Suppose you want to add a new transport type **FERRY**.

You will need to create/modify the following files:

1. **Enum** — Add `FERRY` to `TransportType`.

2. **DTOs**:
   - `dto/details/ferry-details.dto.ts`
   - `dto/segment/ferry-segment.dto.ts`

3. **Handler**:
   - `utils/handlers/ferry.handler.ts`
   - Register in `ticket-handler-map.ts`

4. **Type Unions** — Update `AllSegmentDetails` and segment unions.

5. **Add to Zod schema validation `src/itinerary/schemas/itinerary-request.schema.ts`**

5. **Swagger Integration** — Add the new segment to `@ApiExtraModels` and `oneOf` schema paths.

With these steps, your new transport type will be fully integrated and documented. 🚗 🚞 ✈️

---

> 💡 **Possible enhancements**:  
> I could integrate AI-powered tools to automatically normalize and sort segments, as well as generate the human-readable itinerary — replacing the need for static handlers. This would make your itinerary engine smarter and more adaptive to different inputs and edge cases.