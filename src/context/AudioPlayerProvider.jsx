import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { AudioPlayerContext } from './AudioPlayerContext';
import { tracks } from '../data/tracks';

const AudioPlayerProvider = ({ children }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const contextValue = {
    currentTrack,
    setCurrentTrack,
    audioRef,
    progressBarRef,
    timeProgress,
    setTimeProgress,
    duration,
    isPlaying,
    setDuration,
    setTrackIndex,
    setIsPlaying,
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
