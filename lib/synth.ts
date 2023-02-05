import { useCallback, useState } from 'react';
import * as Tone from 'tone';

const synth: Tone.Synth | undefined =
  typeof window !== 'undefined' ? new Tone.Synth().toDestination() : undefined;

export const useSynth: () => [
  Tone.Synth,
  { initialized: boolean; initialize: () => Promise<void> }
] = () => {
  const [initialized, setInitialized] = useState(false);

  const initialize = useCallback(async () => {
    if (!initialized) {
      await Tone.start();
      setInitialized(true);
    }
  }, [initialized]);

  return [synth as Tone.Synth, { initialize, initialized }];
};

export default synth;
