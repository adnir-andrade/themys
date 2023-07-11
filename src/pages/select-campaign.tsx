import Head from 'next/head';
import Image from 'next/image';

export default function SelectCampaign() {
  return (
    <>
      <Head>
        <title>Select Campaign</title>
      </Head>
      <main>
        <div className="d-flex flex-row mb-3 align-items-center justify-content-center p-3">
          <div className="p-2">
            <img src="/assets/resources/icons/line-left.svg" />
          </div>
          <div className="p-2">
            <h1 className="themys-font-bold title">Select a Campaign</h1>
          </div>
          <div className="p-2">
            <img src="/assets/resources/icons/line-right.svg" />
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
                  <img src="/assets/resources/icons/sort.svg" />
                </button>
                <button className="p-2 semi-transp custom-button" id="add">
                  <img src="/assets/resources/icons/add.svg" />
                </button>
                <button className="p-2 semi-transp custom-button" id="settings">
                  <img src="/assets/resources/icons/settings.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
