import { createContext, useContext } from 'react';

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
