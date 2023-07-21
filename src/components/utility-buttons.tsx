import Image from 'next/image';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';

const UtilityButtons = () => {
  return (
    <div className="flex flex-row justify-evenly pb-5 ">
      {/* TODO: Refactor - Convert those to buttons */}
      <Image
        className="hover:drop-shadow-glow duration-700"
        src={sortIcon}
        alt="sort"
      />
      <Image
        className="hover:drop-shadow-glow duration-700"
        src={addIcon}
        alt="add"
      />
      <Image
        className="hover:drop-shadow-glow duration-700"
        src={settingsIcon}
        alt="settings"
      />
    </div>
  );
};

export default UtilityButtons;
