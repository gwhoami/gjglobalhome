import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FcCalendar } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Booking from './Booking';
import UEvents from './UEvents';
import RedirectLogin from './Modals/RedirectLogIn/RedirectLogin';
import { ToastError } from '../../../../../component/shared/Notification';
import { apiGetCall } from '../../../../../helper/API';

const Schedule: React.FC = () => {
  const session = '';

  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [redirectLogin, setRedirectLogIn] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await apiGetCall('/api/event/events');
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        setEvents(res?.Events);
        return;
      }
    })();
  }, []);
  const handleRedirectModelClose = () => {
    setRedirectLogIn(false);
  };

  const handleOpen = () => {
    if (!session) {
      setOpen(true);
    } else {
      setRedirectLogIn(true);
    }
  };
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

          <button
            onClick={handleOpen}
            className="w-full h-[46px] bg-blue-main flex justify-end items-center rounded-lg relative pr-5"
          >
            <span className="hidden sm:block absolute left-2 md:left-4 text-2xl">
              <FcCalendar />
            </span>
            <button className="text-white font-semibold ">Schedule</button>
          </button>
        </div>
        <div className="w-full bg-grey-main text-center py-4">
          <button
            onClick={handleOpen}
            className=" w-1/2 py-2 bg-green-main text-white"
          >
            Schedule Here...
          </button>
        </div>
        <h1 className="underline">Upcoming Appointments</h1>
        <div className="flex flex-col gap-2">
          {events?.map(({ _id, date, day, time, event }: any) => {
            return (
              <UEvents
                key={_id}
                date={date}
                day={day}
                time={time}
                event={event}
              />
            );
          })}
        </div>
      </div>
      <RedirectLogin
        open={redirectLogin}
        handleClose={handleRedirectModelClose}
      />
      <Booking open={open} setOpen={setOpen} />
      <ToastContainer />
    </>
  );
};

export default Schedule;
