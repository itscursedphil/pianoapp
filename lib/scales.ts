export interface ScaleDefinition {
  name: string;
  notes: number[];
}

const scales: ScaleDefinition[] = [
  {
    name: 'Ionian / Major',
    notes: [0, 2, 4, 5, 7, 9, 11],
  },
  {
    name: 'Aeolian / Natural Minor',
    notes: [0, 2, 3, 5, 7, 8, 10],
  },
];

export default scales;
