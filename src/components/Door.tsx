import { SetStateAction, useState, Dispatch } from 'react';
import { videoContent } from '../types';
import './Door.css';

type Props = {
  video: videoContent;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDoor: Dispatch<SetStateAction<number>>;
};

const Door = ({ video, setModalOpen, setSelectedDoor }: Props) => {
  const [doorOpen, setDoorOpen] = useState<boolean>(false);
  const { artist, doorNumber } = video;

  const openDoor = () => {
    const videoIndex = Number(doorNumber) - 1;
    console.log(videoIndex);
    setDoorOpen(true);
    setModalOpen(true);
    setSelectedDoor(videoIndex);
  };

  const doorStateClass = doorOpen ? 'open' : 'closed';

  return (
    <div className={`Door ${doorStateClass}`} onClick={openDoor}>
      {doorOpen ? artist : doorNumber}
    </div>
  );
};

export default Door;
