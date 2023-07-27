import React from 'react';
import Modal from '@mui/material/Modal';
import EventSummary from './EventSum';
import Spinner from '../../../../../../../component/shared/Spinner/Spinner';
import { ImCross } from 'react-icons/im';
interface SummaryModelProp {
  open: boolean;
  handleClose: () => void;
  handleNext: () => void;
  date: string;
  day: string;
  time: string;
  event: string;
  loading: Boolean;
  handleDirectClose: () => void;
}

const SummaryModel: React.FC<SummaryModelProp> = ({
  open,
  handleClose,
  handleNext,
  date,
  day,
  time,
  event,
  loading,
  handleDirectClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="lg:w-[80vh] md:w-[54vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-md shadow-black p-4 rounded-lg">
        <div className="w-full h-full font-bold text-lg lg:text-xl bg-grey-main py-4 pr-4">
          <div className="flex justify-end" onClick={handleDirectClose}>
            <ImCross />
          </div>
        </div>
        <EventSummary day={day} date={date} time={time} event={event} />
        <div className="flex items-end justify-between gap-4 lg:mt-8 mt-4">
          <button
            className="px-5 py-[8px] rounded-[3rem] border font-bold uppercase bg-blue-main text-white"
            onClick={handleClose}
          >
            Back
          </button>
          <button
            className="px-5 py-[8px] min-w-[80px] rounded-[3rem] border font-bold uppercase bg-black
               text-white"
            onClick={handleNext}
            type="button"
          >
            {loading ? <Spinner size={15} /> : 'Schedule'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SummaryModel;
