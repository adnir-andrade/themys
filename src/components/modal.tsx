import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div
      id="overlay"
      className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
    >
      <div
        id="modal-body"
        className="mx-5 w-[500px] h-[600px] bg-[#343A40] rounded-[15px]"
      >
        <div id="modal-content" className=" h-full w-full p-[20px]">
          <div id="modal-header" className="flex justify-end text-[30px]">
            <a href="#" onClick={handleCloseClick}>
              X{/* TODO: Change this to an icon */}
            </a>
          </div>

          <div id="modal-body" className="text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')!
  );
};

export default Modal;
