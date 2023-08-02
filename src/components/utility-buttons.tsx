import Image from 'next/image';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';

const clickHandler = () => {
  console.log('Testing click handler');
};

const addCampaign = () => {
  console.log('Testing add campaign');
};

export default function UtilityButtons() {
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
