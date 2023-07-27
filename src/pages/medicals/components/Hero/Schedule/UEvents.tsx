import React from 'react';
import formatDate from '../../../../../util/Formats/formatDate';
import formatEvent from '../../../../../util/Formats/formatEvent';
import formatDay from '../../../../../util/Formats/formatDay';
import formatTime from '../../../../../util/Formats/formatTime';
interface UEventProps {
  date: string;
  day: string;
  time: string;
  event: string;
}

const UEvents: React.FC<UEventProps> = ({ date, day, time, event }) => {
  const Date: string = formatDate(date);
  const Day: string = formatDay(day);
  const timePeriod: string = formatTime(time);
  const Event: string = formatEvent(event);
  return (
    <div>
      <h1 className="font-bold">
        {Event} on {Date}
        at {time}
        {timePeriod} FairFax VA
      </h1>
    </div>
  );
};

export default UEvents;
