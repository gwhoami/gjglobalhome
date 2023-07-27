import React from 'react';
import Modal from '@mui/material/Modal';
import EventModal from './EventSchedule';
interface EventModelProp {
  open: boolean;
  handleClose: () => void;
  handleNext: () => void;
  event: string;
  setEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const EventModel: React.FC<EventModelProp> = ({
  open,
  handleClose,
  handleNext,
  event,
  setEvent,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="lg:w-[80vh] md:w-[54vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-md shadow-black p-4 rounded-lg">
        <h1 className="font-bold text-lg lg:text-xl text-cyan-main mb-4">
          Schedule your appointment here...!
        </h1>

        <div>
          <EventModal selectedEvent={event} handleEventChange={setEvent} />
        </div>

        <div className="flex items-end justify-between gap-4 lg:mt-8 mt-4">
          <button
            className="px-5 py-[8px] rounded-[3rem] border font-bold uppercase bg-blue-main text-white"
            onClick={handleClose}
          >
            Back
          </button>
          <button
            className="px-5 py-[8px] rounded-[3rem] border font-bold uppercase bg-blue-main
          text-white"
            onClick={handleNext}
            type="button"
          >
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModel;
