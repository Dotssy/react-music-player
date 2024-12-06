import {
  createContext,
  useContext,
  // useState,
  // ReactNode,
  // Dispatch,
  // SetStateAction,
  // useRef,
} from 'react';

// Context
export const AudioPlayerContext = createContext();

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);

  if (context === undefined) {
    throw new Error(
      'useAudioPlayerContext must be used within an AudioPlayerProvider'
    );
  }

  return context;
};
