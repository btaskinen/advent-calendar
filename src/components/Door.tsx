import './Door.css';

type Props = {
  video: {
    artist: string;
    songTitle: string;
    videoID: string;
    doorNumber: string;
  };
};

const Door = ({ video }: Props) => {
  return <div className="Door">{video.doorNumber}</div>;
};

export default Door;
