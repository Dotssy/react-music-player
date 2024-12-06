import PropTypes from 'prop-types';
import { useState } from 'react';
import { AudioPlayerContext } from './AudioPlayerContext';
import { tracks } from '../data/tracks';

const AudioPlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  // const audioRef = useRef(null);
  const contextValue = {
    currentTrack,
    setCurrentTrack,
  };

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

//Prop Types
AudioPlayerProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AudioPlayerProvider;
