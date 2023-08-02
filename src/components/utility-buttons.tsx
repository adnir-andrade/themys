import Image from 'next/image';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';
import Modal from './modal';
import { useState } from 'react';

export default function UtilityButtons() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    //TODO: Make placeholder content for each utility button. Make modal content unique to each placeholder.
    <div className="flex flex-row justify-evenly pb-5 ">
      <button onClick={openModal} id="sort-button">
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={sortIcon}
          alt="sort"
        />
      </button>

      <button onClick={openModal} id="add-button">
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={addIcon}
          alt="add"
        />
      </button>

      <button onClick={openModal} id="setting-button">
        <Image
          className="hover:drop-shadow-glow duration-700"
          src={settingsIcon}
          alt="settings"
        />
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Content goes here...</p>
        </Modal>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Test goes here...</p>
        </Modal>
      )}
    </div>
  );
}
