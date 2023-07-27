import React from 'react';
import Modal from '@mui/material/Modal';
import DateTimeSchedule from './DateTimeSchedule';
import formatEvent from '../../../../../../../util/Formats/formatEvent';
interface DateTimeModelProp {
  open: boolean;
  handleClose: () => void;
  handleNext: () => void;
  date: string;
  day: string;
  time: string;
  event: string;
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const DateTimeModel: React.FC<DateTimeModelProp> = ({
  open,
  event,
  handleClose,
  handleNext,
  date,
  day,
  time,
  handleInputs,
}) => {
  const Event:string = formatEvent(event);
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
          <DateTimeSchedule
            selectedEvent={Event}
            date={date}
            day={day}
            time={time}
            handleInputsChange={handleInputs}
          />
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
               text-white "
            onClick={handleNext}
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DateTimeModel;
