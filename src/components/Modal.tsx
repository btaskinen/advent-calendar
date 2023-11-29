import { SetStateAction, Dispatch } from 'react';
import { videoContent } from '../types';
import CloseSVG from '../assets/close-circle-svgrepo-com.svg?react';
import './Modal.css';

type Props = {
  onClick: Dispatch<SetStateAction<boolean>>;
  video: videoContent;
};

const Modal = ({ onClick, video }: Props) => {
  const { artist, songTitle, videoID } = video;
  console.log(video);
  return (
    <div className="Modal">
      <div className="Modal_content">
        <div className="Modal_titleContainer">
          <p className="Modal_title">{`${artist} - ${songTitle}`}</p>
          <button className="Modal_closeButton" onClick={() => onClick(false)}>
            <CloseSVG className="Modal_closeSVG" />
          </button>
        </div>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="origin"
          title={`${artist} - ${songTitle}`}
        />
      </div>
    </div>
  );
};

export default Modal;
