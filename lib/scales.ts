export interface ScaleDefinition {
  name: string;
  notes: number[];
}

const scales: ScaleDefinition[] = [
  {
    notes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    name: 'Chromatic',
  },
  {
    notes: [0, 1, 3, 4, 6, 8, 10],
    name: 'Altered scale / Super Locrian scale',
  },
  {
    notes: [0, 1, 3, 5, 6, 8, 10],
    name: 'Locrian',
  },
  {
    notes: [0, 1, 3, 5, 7, 8, 10],
    name: 'Phrygian',
  },
  {
    notes: [0, 1, 3, 5, 7, 8, 11],
    name: 'Neapolitan minor scale',
  },
  {
    notes: [0, 1, 3, 5, 7, 9, 11],
    name: 'Neapolitan major scale',
  },
  {
    notes: [0, 1, 4, 5, 6, 8, 11],
    name: 'Persian scale',
  },
  {
    notes: [0, 1, 4, 5, 7, 8, 10],
    name: 'Phrygian dominant scale',
  },
  {
    notes: [0, 1, 4, 5, 7, 8, 11],
    name: 'Double harmonic scale',
  },
  {
    notes: [0, 1, 4, 6, 7, 10],
    name: 'Tritone scale',
  },
  {
    notes: [0, 1, 4, 6, 8, 10, 11],
    name: 'Enigmatic scale',
  },
  {
    notes: [0, 1, 5, 6, 10],
    name: 'Iwato scale',
  },
  {
    notes: [0, 1, 5, 7, 8],
    name: 'In scale',
  },
  {
    notes: [0, 1, 5, 7, 10],
    name: 'Insen scale',
  },
  {
    notes: [0, 2, 3, 5, 6, 8, 10],
    name: 'Half diminished scale',
  },
  {
    notes: [0, 2, 3, 5, 7, 8, 10],
    name: 'Aeolian / Natural Minor',
  },
  {
    notes: [0, 2, 3, 5, 7, 8, 11],
    name: 'Harmonic Minor',
  },
  {
    notes: [0, 2, 3, 5, 7, 9, 10],
    name: 'Dorian',
  },
  {
    notes: [0, 2, 3, 5, 7, 9, 11],
    name: 'Melodic Minor (asc)',
  },
  {
    notes: [0, 2, 3, 6, 7, 8, 10],
    name: '"Gypsy" scale',
  },
  {
    notes: [0, 2, 3, 6, 7, 8, 11],
    name: 'Hungarian minor scale',
  },
  {
    notes: [0, 2, 3, 6, 7, 9, 10],
    name: 'Ukrainian Dorian scale',
  },
  {
    notes: [0, 2, 4, 5, 6, 8, 10],
    name: 'Major Locrian scale',
  },
  {
    notes: [0, 2, 4, 5, 7, 8, 11],
    name: 'Harmonic major scale',
  },
  {
    notes: [0, 2, 4, 5, 7, 9, 10],
    name: 'Mixolydian',
  },
  {
    notes: [0, 2, 4, 5, 7, 9, 11],
    name: 'Ionian / Major',
  },
  {
    notes: [0, 2, 4, 6, 7, 9, 10],
    name: 'Acoustic scale',
  },
  {
    notes: [0, 2, 4, 6, 7, 9, 11],
    name: 'Lydian',
  },
  {
    notes: [0, 2, 4, 6, 8, 9, 11],
    name: 'Lydian augmented scale',
  },
  {
    notes: [0, 2, 4, 6, 8, 10],
    name: 'Whole tone',
  },
  {
    notes: [0, 2, 4, 6, 9, 10],
    name: 'Prometheus scale',
  },
  {
    notes: [0, 2, 4, 7, 9],
    name: 'Major pentatonic',
  },
  {
    notes: [0, 2, 5, 7, 9],
    name: 'Blues major',
  },
  {
    notes: [0, 2, 5, 7, 10],
    name: 'Egyptian, suspended',
  },
  {
    notes: [0, 3, 4, 6, 7, 9, 10],
    name: 'Hungarian major scale',
  },
  {
    notes: [0, 3, 4, 7, 8, 11],
    name: 'Augmented scale',
  },
  {
    notes: [0, 3, 5, 6, 7, 10],
    name: 'Blues scale',
  },
  {
    notes: [0, 3, 5, 7, 10],
    name: 'Minor pentatonic',
  },
  {
    notes: [0, 3, 5, 7, 10],
    name: 'Yo scale',
  },
  {
    notes: [0, 3, 5, 8, 10],
    name: 'Blues minor',
  },
  {
    notes: [0, 4, 6, 7, 11],
    name: 'Hirajoshi scale',
  },
];

export default scales;
