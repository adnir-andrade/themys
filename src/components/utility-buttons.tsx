import Image from 'next/image';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';
import Modal from './modal';
import { useState } from 'react';

export default function UtilityButtons() {
  const [showModal, setShowModal] = useState(false);

  const addCampaign = () => {
    setShowModal(true);
    console.log('Testing add campaign');
  };

  const clickHandler = () => {
    console.log('Testing click handler');
  };

  return (
    <div className="flex flex-row justify-evenly pb-5 ">
      {/* TODO: Refactor - Convert those to buttons */}
      <button onClick={clickHandler}>
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={sortIcon}
          alt="sort"
        />
      </button>
      <button onClick={addCampaign}>
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={addIcon}
          alt="add"
        />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Content goes here...</p>
        </Modal>
      )}
      <button onClick={clickHandler}>
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={settingsIcon}
          alt="settings"
        />
      </button>
    </div>
  );
}
