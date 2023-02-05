import React, { useCallback } from 'react';
import styled from 'styled-components';
import * as Tone from 'tone';

import { noteNames, NOTES_IN_OCTAVE, sharpNotes } from '../../lib/notes';
import { ScaleDefinition } from '../../lib/scales';
import { useSynth } from '../../lib/synth';
import Box from '../Box';
import Key from './Key';

export interface KeyboardProps {
  scale?: ScaleDefinition | null;
  keys?: number;
  root?: number;
  offset?: number;
}

const KeyboardContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 40px;
`;

const Keyboard: React.FC<KeyboardProps> = ({
  scale,
  keys = 12,
  root = 0,
  offset = 0,
}) => {
  const [synth, { initialize: initializeSynth }] = useSynth();

  const notes = Array(keys)
    .fill(0)
    .map((_, i) => (i + offset + NOTES_IN_OCTAVE) % NOTES_IN_OCTAVE);
  const keyboardSharpNotes = notes.filter((note) => sharpNotes.includes(note));

  const handleKeyPress = useCallback(
    async (noteName: string, octave: number) => {
      await initializeSynth();

      const noteVal = noteName;
      const now = Tone.now();

      synth.triggerAttackRelease(`${noteVal}${4 + octave}`, '8n', now);
    },
    [initializeSynth, synth]
  );

  return (
    <Box width={1}>
      <KeyboardContainer>
        {notes.map((note, index) => {
          const width = 100 / (notes.length - keyboardSharpNotes.length);
          const noteName = noteNames[note];
          const isSharp = sharpNotes.includes(note);
          const isRoot = note === root;
          const isActive = scale
            ? scale.notes.includes(
                (note - root + NOTES_IN_OCTAVE) % NOTES_IN_OCTAVE
              )
            : false;

          return (
            <Key
              // eslint-disable-next-line react/no-array-index-key
              key={`${noteName}+${index}`}
              width={width}
              sharp={isSharp}
              root={isRoot}
              noteName={noteName}
              active={isActive}
              onClick={() =>
                handleKeyPress(
                  noteName,
                  Math.floor((index + offset) / NOTES_IN_OCTAVE)
                )
              }
            />
          );
        })}
      </KeyboardContainer>
    </Box>
  );
};

export default Keyboard;
