import { useState } from 'react';
import videoData from './videoData.json';
import { videoContent } from './types';
import Door from './components/Door';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<videoContent>(
    videoData[14]
  );

  return (
    <>
      {modalOpen && <Modal onClick={setModalOpen} video={selectedVideo} />}
      <div className="App">
        <h1 data-cy="app-title">Advendt Calendar 2023</h1>
        <div className="doorContainer">
          {videoData.map((video) => (
            <Door
              key={video.doorNumber}
              video={video}
              setModalOpen={setModalOpen}
              setSelectedDoor={setSelectedVideo}
            />
          ))}
        </div>
        <footer>Created by Barbara Taskinen</footer>
      </div>
    </>
  );
};

export default App;
