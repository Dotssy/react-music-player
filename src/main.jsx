import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AudioPlayerProvider from './context/AudioPlayerProvider.jsx';
import './styles/index.css';
import './styles/customize-progress-bar.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </StrictMode>
);
