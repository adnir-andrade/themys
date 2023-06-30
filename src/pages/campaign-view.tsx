import Image from 'next/image';

export default function campaignView() {
  return (
    <main>
      <div className="d-flex flex-row mb-3 align-items-center justify-content-center p-3">
        <div className="p-2">
          <img src="/assets/resources/icons/line-left.svg" />
        </div>
        <div className="p-2">
          <h1 className="themys-font-bold title">Campaign Name</h1>
        </div>
        <div className="p-2">
          <img src="/assets/resources/icons/line-right.svg" />
        </div>
      </div>
      <div className="position-relative d-flex flex-column mb-3 align-items-center">
        <div className="transp-bg">
          <div className="my-4 p-2">
            <div id="character-screen" className="row justify-content-center" />
            <div className="d-flex flex-row mb-3 align-items-center justify-content-evenly">
              <button
                className="p-2 semi-transp custom-button"
                id="sort"
                data-featherlight="<div>Placeholder for Sort Screen</div>"
              >
                <img src="/assets/resources/icons/sort.svg" />
              </button>
              <button className="p-2 semi-transp custom-button" id="add">
                <img src="/assets/resources/icons/add.svg" />
              </button>
              <button
                className="p-2 semi-transp custom-button"
                id="settings"
                data-featherlight="<div>Placeholder for Config Screen</div>"
              >
                <img src="/assets/resources/icons/settings.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
