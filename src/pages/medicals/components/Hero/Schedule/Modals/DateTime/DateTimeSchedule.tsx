import React from 'react';
import Radio from '../../../../../../../component/shared/Buttons/Radio';
import { FcCalendar } from 'react-icons/fc';
import DayJSON from '../../../../../../../constants/Event/Day.json';
interface Props {
  selectedEvent: string;
  date: string;
  day: string;
  time: string;
  handleInputsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateTimeModal: React.FC<Props> = ({
  selectedEvent,
  date,
  day,
  time,
  handleInputsChange,
}) => {
  return (
    <>
      <div className="border flex justify-between py-4 md:py-8 px-4 font-bold min-w-[300px] ">
        <h1>Organization:JJMilan Medical</h1>
        <h1>Event: {selectedEvent}</h1>
      </div>
      <div className="border grid gap-1 p-4">
        <h1>Date and Time Preference</h1>
        <h1>Tell us when you would like to have an appointment</h1>
      </div>
      <div>
        <h1 className="font-bold text-lg">
          Choose an appointment Date and Time
        </h1>
        <div className="w-full h-[46px] flex justify-between items-center rounded-lg bg-blue-main px-4">
          <div className="w-[130px] h-[46px]  flex justify-end items-center relative pr-5">
            <span className="absolute left-0 text-2xl">
              <FcCalendar />
            </span>
            <button className="text-white font-semibold">Date/Time</button>
          </div>
          <div className="flex justify-end font-semibold text-white">Day</div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div className="font-bold">Date</div>
            <input
              type="date"
              name="date"
              id=""
              value={date}
              onChange={handleInputsChange}
            />
            <div className="font-bold">Time</div>
            <input
              type="time"
              name="time"
              id=""
              value={time}
              onChange={handleInputsChange}
            />
          </div>

          <div>
            <div className="font-bold">Day</div>
            <div className="grid gap-1">
              {DayJSON.map(({ id, label, value }: any) => {
                return (
                  <Radio
                    name="day"
                    key={id}
                    label={label}
                    value={value}
                    checked={day === value}
                    onChange={handleInputsChange}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateTimeModal;
