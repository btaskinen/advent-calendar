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
        <h1 data-cy="app-title">Advent Calendar 2023</h1>
        <div className="doorContainer" data-cy="door-container">
          {videoData.map((video) => (
            <Door
              key={video.doorNumber}
              video={video}
              setModalOpen={setModalOpen}
              setSelectedDoor={setSelectedVideo}
            />
          ))}
        </div>
        <footer data-cy="app-footer">Created by Barbara Taskinen</footer>
      </div>
    </>
  );
};

export default App;
