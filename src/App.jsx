import { AudioPlayer } from './components/AudioPlayer';

function App() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className="text-3xl text-center font-bold mb-5 text-gray-600">
        Audio player in React
      </h1>
      <AudioPlayer />
    </div>
  );
}

export default App;
