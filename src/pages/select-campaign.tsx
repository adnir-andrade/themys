import Head from 'next/head';
import Image from 'next/image';
import lineLeft from '../../public/assets/icons/line-left.svg';
import lineRight from '../../public/assets/icons/line-right.svg';
import sortIcon from '../../public/assets/icons/sort.svg';
import addIcon from '../../public/assets/icons/add.svg';
import settingsIcon from '../../public/assets/icons/settings.svg';

export default function SelectCampaign() {
  return (
    <>
      <Head>
        <title>Select Campaign</title>
      </Head>
      <main>
        <div className="d-flex flex-row mb-3 align-items-center justify-content-center p-3">
          <div className="p-2">
            <Image className="" src={lineLeft} alt="line-left" />
          </div>
          <div className="p-2">
            <h1 className="themys-font-bold title">Select a Campaign</h1>
          </div>
          <div className="p-2">
            <Image className="" src={lineRight} alt="line-right" />
          </div>
        </div>
        <div className="position-relative d-flex flex-column mb-3 align-items-center">
          <div className="transp-bg">
            <div className="my-4 p-2">
              <div className="d-flex flex-column mb-3 align-items-center" />
              <div
                id="option-buttons"
                className="d-flex flex-row mb-3 align-items-center justify-content-evenly"
              >
                <button className="p-2 semi-transp custom-button" id="sort">
                  <Image className="" src={sortIcon} alt="sort" />
                </button>
                <button className="p-2 semi-transp custom-button" id="add">
                  <Image className="" src={addIcon} alt="add" />
                </button>
                <button className="p-2 semi-transp custom-button" id="settings">
                  <Image className="" src={settingsIcon} alt="settings" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
