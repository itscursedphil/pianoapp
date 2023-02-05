import React, { useCallback, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import * as Tone from 'tone';

import Box from '../components/Box';
import { SkeletonButton } from '../components/Button';
import Keyboard from '../components/Keyboard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import { noteNames, NOTES_IN_OCTAVE } from '../lib/notes';
import scales, { ScaleDefinition } from '../lib/scales';
import { useSynth } from '../lib/synth';

const ScaleSelection: React.FC<{
  selectedScale: ScaleDefinition;
  onSelect: (name: string) => void;
}> = ({ selectedScale, onSelect }) => (
  <Box display="flex" flexWrap="wrap" mb={-2}>
    {scales.map(({ name }) => (
      <Box mr={4} mb={2} key={name}>
        <SkeletonButton type="button" onClick={() => onSelect(name)}>
          <Text
            inline
            fontSize="1.2rem"
            style={{ opacity: selectedScale?.name === name ? 1 : 0.4 }}
          >
            <strong>{name}</strong>
          </Text>
        </SkeletonButton>
      </Box>
    ))}
  </Box>
);

const RootSelection: React.FC<{
  selectedRoot: number;
  onSelect: (index: number) => void;
}> = ({ selectedRoot, onSelect }) => (
  <Box display="flex" mb={-2} flexWrap="wrap">
    {noteNames.map((noteName, index) => (
      <Box mr={4} mb={2} key={noteName}>
        <SkeletonButton type="button" onClick={() => onSelect(index)}>
          <Text
            inline
            fontSize="1.2rem"
            style={{ opacity: selectedRoot === index ? 1 : 0.4 }}
          >
            <strong>{noteName}</strong>
          </Text>
        </SkeletonButton>
      </Box>
    ))}
  </Box>
);

const HomePage: NextPage = () => {
  const [scale, setScale] = useState<ScaleDefinition>(scales[0]);
  const [root, setRoot] = useState(0);
  const [showScales, setShowScales] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const [synth, { initialize }] = useSynth();

  const keyboardOffset = -7;

  const toggleShowScales = useCallback(() => {
    const nextShowScales = !showScales;

    setShowScales(nextShowScales);

    if (nextShowScales) {
      setShowNotes(false);
    }
  }, [showScales]);

  const toggleShowNotes = useCallback(() => {
    const nextShowNotes = !showNotes;

    setShowNotes(nextShowNotes);

    if (nextShowNotes) {
      setShowScales(false);
    }
  }, [showNotes]);

  const handlePlayClick = useCallback(async () => {
    await initialize();

    const now = Tone.now();

    [...scale.notes, scale.notes[0] + NOTES_IN_OCTAVE].forEach(
      (note, index) => {
        const noteName = noteNames[(note + root) % NOTES_IN_OCTAVE];
        const octave = 4 + Math.floor((note + root) / NOTES_IN_OCTAVE);

        synth.triggerAttackRelease(
          `${noteName}${octave}`,
          '8n',
          now + 0.25 * index
        );
      }
    );
  }, [initialize, root, scale.notes, synth]);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Box my={5}>
          <h1>Pianoapp</h1>
        </Box>
      </header>
      <main>
        <Box>
          <Box display="flex" mb={2} alignItems="flex-end">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              mr={4}
            >
              <Text
                inline
                fontSize="0.8rem"
                style={{ textTransform: 'uppercase' }}
                mb={1}
              >
                Scale:
              </Text>
              <SkeletonButton type="button" onClick={toggleShowScales}>
                <Text inline fontSize="1.2rem">
                  <strong>{scale?.name}</strong>
                </Text>
              </SkeletonButton>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              mr={4}
            >
              <Text
                inline
                fontSize="0.8rem"
                style={{ textTransform: 'uppercase' }}
                mb={1}
              >
                Root:
              </Text>
              <SkeletonButton type="button" onClick={toggleShowNotes}>
                <Text inline fontSize="1.2rem">
                  <strong>{noteNames[root]}</strong>
                </Text>
              </SkeletonButton>
            </Box>
            <Box>
              <SkeletonButton type="button" onClick={handlePlayClick}>
                <Text inline fontSize="1.2rem">
                  <strong>Play</strong>
                </Text>
              </SkeletonButton>
            </Box>
          </Box>
          {showScales && (
            <Box mb={3}>
              <ScaleSelection
                selectedScale={scale}
                onSelect={(name) =>
                  setScale(scales.find((s) => s.name === name) || scales[0])
                }
              />
            </Box>
          )}
          {showNotes && (
            <Box mb={3}>
              <RootSelection
                selectedRoot={root}
                onSelect={(index) => setRoot(index)}
              />
            </Box>
          )}
          <Keyboard
            keys={24}
            root={root}
            offset={keyboardOffset}
            scale={scale}
          />
        </Box>
      </main>
    </Layout>
  );
};

export default HomePage;
