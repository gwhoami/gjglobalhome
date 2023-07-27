import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import { FcCalendar } from 'react-icons/fc';
import LogError from '../../../../../util/LogError';

import Events from './Event';

function Schedule({ eventsData }: any) {
  // LogError('[EventDATA]', eventsData);

  // const [scheduleEvents, setScheduleEvents] = useState([]);
  // setScheduleEvents(events);
  return (
    <>
      <div className="w-full h-full max-w-[400px] flex flex-col items-center gap-6 px-4 py-10 rounded-2xl shadow-black shadow-md">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <div className="grid place-items-center grid-cols-2 gap-4">
          <div className="flex items-center justify-center relative">
            <span className="absolute left-2 text-2xl">
              <BiSearchAlt2 />
            </span>
            <input
              type="text"
              className={`w-full h-[46px] font-[500] text-[16px] bg-gray-50 border disabled:cursor-not-allowed rounded-lg focus:outline-none  px-2.5 pl-8`}
            />
          </div>

          <Link
            to="/user/event/schedule"
            className="w-full h-[46px] bg-blue-main flex justify-end items-center rounded-lg relative pr-5"
          >
            <span className="hidden sm:block absolute left-2 md:left-4 text-2xl">
              <FcCalendar />
            </span>
            <button className="text-white font-semibold ">Schedule</button>
          </Link>
        </div>
        <div className="w-full bg-grey-main text-center py-4">
          <Link
            to="/user/event/schedule"
            className=" w-1/2 py-2 bg-green-main text-white"
          >
            Schedule Here...
          </Link>
        </div>
        <h1 className="underline">Upcoming Events</h1>
        {eventsData ? (
        <div className="flex flex-col gap-2">
          {eventsData?.map(
            ({
              id,
              scheduleDate: date,
              day,
              scheduleTime: time,
              scheduleType: dayPeroid,
              organization,
              person,
              city,
              address,
              state,
            }: any) => {
              return (
                <Events
                  key={id}
                  date={date}
                  day={day}
                  time={time}
                  dayPeroid={dayPeroid}
                  organization={organization}
                  person={person}
                  city={city}
                  address={address}
                  state={state}
                />
              );
            }
          )}
        </div>
        ) : (<h1 className="text-center font-bold ">No Event to Show</h1>)}
      </div>

      <ToastContainer />
    </>
  );
}

export default Schedule;
