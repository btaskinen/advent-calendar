import { SetStateAction, useState, Dispatch } from 'react';
import { videoContent } from '../types';
import './Door.css';

type Props = {
  video: videoContent;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDoor: Dispatch<SetStateAction<videoContent>>;
};

const Door = ({ video, setModalOpen, setSelectedDoor }: Props) => {
  const [doorOpen, setDoorOpen] = useState<boolean>(false);
  const { artist, doorNumber } = video;

  const openDoor = () => {
    setDoorOpen(true);
    setModalOpen(true);
    setSelectedDoor(video);
  };

  const doorStateClass = doorOpen ? 'open' : 'closed';

  return (
    <div className={`Door ${doorStateClass}`} onClick={openDoor}>
      <div className="Door_innerDiv">{doorOpen ? artist : doorNumber}</div>
    </div>
  );
};

export default Door;
