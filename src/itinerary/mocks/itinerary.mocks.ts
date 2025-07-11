export const itineraryMocks = {
  request: {
    basicExample: {
      value: {
        tickets: [
          {
            transportType: 'train',
            departure: {
              location: 'St. Anton am Arlberg Bahnhof',
              platform: '3',
              time: '2023-12-24T08:00:00Z',
            },
            arrival: {
              location: 'Innsbruck Hbf',
            },
            details: {
              platform: '3',
              number: 'RJX 765',
              seat: '17C',
            },
          },
        ],
      },
    },
  },

  response: {
    basicExample: {
      value: {
        id: 'itn_123456789',
        tickets: [
          {
            transportType: 'train',
            departure: {
              location: 'St. Anton am Arlberg Bahnhof',
              time: '2023-12-24T08:00:00Z',
            },
            arrival: {
              location: 'Innsbruck Hbf',
            },
            details: {
              platform: '3',
              number: 'RJX 765',
              seat: '17C',
            },
          },
        ],
        humanReadable: [
          '0. Start.',
          '1. Board train RJX 765, Platform 3 from St. Anton am Arlberg Bahnhof to Innsbruck Hbf. Seat number 17C.',
          '2. Last destination reached.',
        ],
        createdAt: '2023-12-24T08:00:00Z',
      },
      summary: '',
    },
  },
};
