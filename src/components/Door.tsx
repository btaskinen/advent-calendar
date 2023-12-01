import { SetStateAction, useState, Dispatch } from 'react';
import { videoContent } from '../types';
import './Door.css';

type Props = {
  video: videoContent;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDoor: Dispatch<SetStateAction<videoContent>>;
};

const Door = ({ video, setModalOpen, setSelectedDoor }: Props) => {
  const { artist, doorNumber } = video;

  const [doorOpen, setDoorOpen] = useState<boolean>(false);
  const [doorText, setDoorText] = useState<string>(doorNumber);

  const currentDate = new Date();

  const doesOpen =
    currentDate.getMonth() === 11 &&
    currentDate.getDate() >= Number(doorNumber);

  const openDoor = () => {
    if (doesOpen) {
      setDoorText(artist);
      setDoorOpen(true);
      setModalOpen(true);
      setSelectedDoor(video);
    } else {
      setDoorOpen(true);
      setDoorText('Not yet. Be patient!');
    }
  };

  const doorStateClass = doorOpen ? 'open' : 'closed';

  return (
    <div className={`Door ${doorStateClass}`} onClick={openDoor}>
      <div className="Door_innerDiv" data-cy="door">
        {doorText}
      </div>
    </div>
  );
};

export default Door;
