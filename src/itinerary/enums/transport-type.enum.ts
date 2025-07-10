//extracted from pdf file
export enum TransportType {
  TRAIN = 'train',
  AIRPLANE = 'airplane',
  BUS = 'bus',
  TRAM = 'tram',
  TAXI = 'taxi',
  BOAT = 'boat',
}

export const transportTypesAsArray = Object.values(TransportType) as [
  string,
  ...string[],
];
