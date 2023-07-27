import React from 'react';
import formatDate from '../../../../../util/Formats/formatDate';
import formatDay from '../../../../../util/Formats/formatDay';
import formatTime from '../../../../../util/Formats/formatTime';
interface UEventProps {
  date: string;
  day: string;
  time: string;
  organization: string;
  person: string;
  state: string;
  city: string;
  address: string;
  dayPeroid: string;
}

const Events: React.FC<UEventProps> = ({
  date,
  day,
  time,
  organization,
  person,
  state,
  city,
  address,
  dayPeroid,
}) => {
  const Date: string = formatDate(date);
  const Day: string = formatDay(day);
  // const timePeriod: string = formatTime(time);

  return (
    <div>
      <h1 className="font-bold">
        {organization}'s Event will held on {Date}
        at {time},{day} {dayPeroid},{address},{city},{state}.
      </h1>
    </div>
  );
};

export default Events;
