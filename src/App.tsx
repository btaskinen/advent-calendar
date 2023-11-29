import videoData from './videoData.json';
import Door from './components/Door';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Advendt Calendar 2023</h1>
      <div className="doorContainer">
        {videoData.map((video) => (
          <Door video={video} />
        ))}
      </div>
      <footer>Created by Barbara Taskinen</footer>
    </div>
  );
};

export default App;
