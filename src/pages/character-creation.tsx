import Head from 'next/head';
import Image from 'next/image';

export default function CharacterCreation() {
  return (
    <>
      <Head>
        <title>Character Creation</title>
      </Head>

      <main>
        <div className="d-flex flex-row align-items-center justify-content-center p-3">
          <div className="p-2">
            <img src="/assets/resources/icons/line-left.svg" />
          </div>
          <div className="p-2">
            <form id="name-form">
              {/* Original: <form id="name-form" onsubmit="return changeFocus(event)"> */}
              <input
                type="text"
                name="username"
                placeholder="Name Your Character"
                className="character-name-input themys-font-bold"
                id="character-name"
                required={true}
              />
            </form>
          </div>
          <div className="p-2">
            <img src="/assets/resources/icons/line-right.svg" />
          </div>
        </div>
        <div className="d-flex flex-row mb-3 align-items-center justify-content-center">
          <button type="button" className="bttn-focus" id="random-name">
            <img src="/assets/resources/icons/Dice.svg" />
          </button>
        </div>
        <div id="carouselCharCreation" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselCharCreation"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselCharCreation"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselCharCreation"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            {/* FIRST SCREEN */}
            <div className="carousel-item active">
              <form id="character-form">
                <div className="position-relative d-flex flex-column mb-3 align-items-center">
                  <div className="transp-bg character-form">
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">
                        Character Level
                      </label>
                      <select
                        className="themys-dropdown-font"
                        id="character-dropdown"
                        required={true}
                      >
                        <option value="" disabled={true} selected={true}>
                          Level
                        </option>
                      </select>
                    </div>
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">Race</label>
                      <select
                        className="themys-dropdown-font"
                        id="race-dropdown"
                      >
                        <option value="" disabled={true} selected={true}>
                          Race
                        </option>
                      </select>
                    </div>
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">Class</label>
                      <select className="themys-dropdown-font">
                        <option value="" disabled={true} selected={true}>
                          1st Class
                        </option>
                        <option value="warrior">Warrior</option>
                        <option value="mage">Mage</option>
                        <option value="hunter">Hunter</option>
                        <option value="assassin">Assassin</option>
                        <option value="cleric">Cleric</option>
                        <option value="barbarian">Barbarian</option>
                        <option value="paladin">Paladin</option>
                        <option value="ranger">Ranger</option>
                        <option value="bard">Bard</option>
                      </select>
                    </div>
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">
                        Class Level
                      </label>
                      <select
                        className="themys-dropdown-font"
                        id="level-dropdown"
                      >
                        <option value="" disabled={true} selected={true}>
                          Level
                        </option>
                      </select>
                    </div>
                    <div className="form-check form-switch themys-font float-end p-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="multiclass"
                      />
                      <label
                        className="form-check-label switch-adjust"
                        htmlFor="multiclass"
                      >
                        MultiClass
                      </label>
                    </div>
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">
                        2nd Class
                      </label>
                      <select
                        className="themys-dropdown-font multiclass-field"
                        disabled={true}
                      >
                        <option value="" disabled={true} selected={true}>
                          2st Class
                        </option>
                        <option value="warrior">Warrior</option>
                        <option value="mage">Mage</option>
                        <option value="hunter">Hunter</option>
                        <option value="assassin">Assassin</option>
                        <option value="cleric">Cleric</option>
                        <option value="barbarian">Barbarian</option>
                        <option value="paladin">Paladin</option>
                        <option value="ranger">Ranger</option>
                        <option value="bard">Bard</option>
                      </select>
                    </div>
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">
                        2nd Class Level
                      </label>
                      <select
                        className="themys-dropdown-font multiclass-field"
                        id="thisIsTotallyNotRecommended"
                        disabled={true}
                      >
                        <option value="" disabled={true} selected={true}>
                          Level
                        </option>
                      </select>
                    </div>
                    <div className="align-right">
                      <img src="/assets/resources/icons/chevrons-right.svg" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* SECOND SCREEN */}
            <div className="carousel-item">
              <div className="position-relative d-flex justify-content-around">
                <div className="transp-bg character-form">
                  {/* Content inside transparent background */}
                  <form id="stats-form">
                    <table className="d-flex justify-content-around">
                      <thead>
                        <tr>
                          <th>
                            <button
                              id="preset1"
                              type="button"
                              className="btn btn-dark btn-sm preset-btn"
                              data-toggle="tooltip"
                              title="Add all remaining points to save them in this preset"
                            >
                              Save Preset 1
                            </button>
                          </th>
                          <th>
                            <button
                              id="preset2"
                              type="button"
                              className="btn btn-dark btn-sm preset-btn"
                              data-toggle="tooltip"
                              title="Add all remaining points to save them in this preset"
                            >
                              Save Preset 2
                            </button>
                          </th>
                          <th>
                            <button
                              id="preset3"
                              type="button"
                              className="btn btn-dark btn-sm preset-btn"
                              data-toggle="tooltip"
                              title="Add all remaining points to save them in this preset"
                            >
                              Save Preset 3
                            </button>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="stats-table">
                      <thead>
                        <tr>
                          <th>
                            <button
                              type="button"
                              className="bttn-focus"
                              id="random"
                            >
                              <img src="/assets/resources/icons/Dice.svg" />
                            </button>
                          </th>
                          <th>
                            <span className="non-selectable" id="points-left">
                              10
                            </span>
                          </th>
                          <th>
                            <button
                              type="button"
                              className="bttn-focus"
                              id="reset"
                            >
                              <img src="/assets/resources/icons/Reset.svg" />
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              S
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              P
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              E
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              C
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              I
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              A
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-size">
                            <span className="stat-bg color-light-sepia bttn-focus">
                              L
                            </span>
                          </td>
                          <td className="table-size">
                            <span className="value-bg color-golden">5</span>
                          </td>
                          <td className="table-size">
                            <span className="mod-bg color-light-sepia">0</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <div className="d-flex justify-content-center mb-5">
                    <button className="bttn-focus" id="decrease-value">
                      <img src="/assets/resources/icons/arrow-down-circle.svg" />
                    </button>
                    <span
                      id="selected-stat"
                      className="color-light-sepia position-relative d-flex flex-column align-items-center non-selectable"
                    >
                      S
                    </span>
                    <button className="bttn-focus" id="increase-value">
                      <img src="/assets/resources/icons/arrow-up-circle.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* THIRD SCREEN */}
            <div className="carousel-item">
              <div className="position-relative d-flex flex-column mb-3 align-items-center">
                <div className="transp-bg character-form">
                  <form id="perks-form">
                    <div className="mb-2 p-2">
                      <label className="themys-font align-left">
                        PERK SCREEN
                      </label>
                      <select
                        className="themys-dropdown-font"
                        id="character-dropdown"
                      >
                        <option value="" disabled={true} selected={true}>
                          Level
                        </option>
                      </select>
                    </div>
                  </form>
                  <div className="align-right">
                    <button id="submitBtn">
                      <img src="/assets/resources/icons/check.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCharCreation"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselCharCreation"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  );
}
