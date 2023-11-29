import { useState } from 'react';
import videoData from './videoData.json';
import Door from './components/Door';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedDoor, setSelectedDoor] = useState<number>(0);

  console.log(selectedDoor);
  console.log(videoData[selectedDoor]);

  return (
    <>
      {modalOpen && (
        <Modal onClick={setModalOpen} video={videoData[selectedDoor]} />
      )}
      <div className="App">
        <h1>Advendt Calendar 2023</h1>
        <div className="doorContainer">
          {videoData.map((video) => (
            <Door
              key={video.doorNumber}
              video={video}
              setModalOpen={setModalOpen}
              setSelectedDoor={setSelectedDoor}
            />
          ))}
        </div>
        <footer>Created by Barbara Taskinen</footer>
      </div>
    </>
  );
};

export default App;
