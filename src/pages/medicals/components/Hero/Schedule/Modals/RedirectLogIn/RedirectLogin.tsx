import React from 'react';
import Modal from '@mui/material/Modal';
import { ImCross } from 'react-icons/im';
import { FiAlertTriangle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
interface Props {
  open: boolean;
  handleClose: () => void;
}

const RedirectLogin: React.FC<Props> = ({ open, handleClose }) => {
  const history = useHistory();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="lg:w-[80vh] md:w-[54vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-md shadow-black p-4 rounded-lg">
        <div className="flex justify-end text-2xl" onClick={handleClose}>
          <ImCross />
        </div>
        <div className=" flex flex-col gap-2 justify-center items-center">
          <FiAlertTriangle className="text-5xl text-green-main" />
          <h1 className="text-xl text-center">
            You need to Log in to schedule Event!
          </h1>
          <button
            className="px-5 py-[8px] min-w-[80px] rounded-[3rem] border font-bold uppercase bg-black
               text-white"
            onClick={() => history.push('/login')}
            type="button"
          >
            LogIn
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RedirectLogin;
