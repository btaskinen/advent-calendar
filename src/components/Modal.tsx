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
          <p
            className="Modal_title"
            data-cy="modal-title"
          >{`${artist} - ${songTitle}`}</p>
          <button
            className="Modal_closeButton"
            data-cy="close-button"
            onClick={() => onClick(false)}
          >
            <CloseSVG className="Modal_closeSVG" />
          </button>
        </div>
        <iframe
          className="Modal_iframe"
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="origin"
          title={`${artist} - ${songTitle}`}
          data-cy="iframe"
        />
        <p data-cy="modal-info-text">
          If video is unavailable, watch it from{' '}
          <a
            href={`https://youtu.be/${videoID}`}
            target="_blank"
            data-cy="youtube-link"
          >
            YouTube
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
