import React, { useContext, useRef, useState } from 'react';
import SummaryModel from './Modals/EventSum/SummaryModel';
import EventModel from './Modals/EventSchedule/EventModel';
import DateTimeModel from './Modals/DateTime/DateTimeModel';
import {
  ToastSuccess,
  ToastWarning,
  ToastError,
} from '../../../../../component/shared/Notification';
import LogError from '../../../../../util/LogError';
import { apiPostCall } from '../../../../../helper/API';
import { MedicalContext } from '../../../contexts/mainContext';
import MyLocalStorage from '../../../../../util/mylocalStorage';
interface BookingProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface BookingInputs {
  date: string;
  time: string;
  day: string;
  event: string;
  userEmail?: string;
}

const Booking: React.FC<BookingProps> = ({ open, setOpen }) => {
  const userEmail = useRef({ email: MyLocalStorage.getEmail() });
  // console.log(userEmail);
  const { setFetchAgain } = useContext(MedicalContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [models, setModels] = useState({
    isEventModel: false,
    isDateTimeModel: false,
    isSummaryModel: false,
  });
  const [inputs, setInputs] = useState<BookingInputs>({
    date: '',
    time: '',
    day: '',
    event: '',
  });
  // console.log(inputs.date, inputs.day);
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'date') {
      // Perform logic for date input
      const selectedDate = value;

      // Perform the logic to determine the corresponding day based on the selected date
      const dateObj = new Date(selectedDate);
      const dayOfWeek = dateObj.getDay();

      // Map the dayOfWeek to the corresponding radio button value
      let correspondingDay = '';
      switch (dayOfWeek) {
        case 0:
          correspondingDay = 'sunday';
          break;
        case 1:
          correspondingDay = 'monday';
          break;
        case 2:
          correspondingDay = 'tuesday';
          break;
        case 3:
          correspondingDay = 'wednesday';
          break;
        case 4:
          correspondingDay = 'thursday';
          break;
        case 5:
          correspondingDay = 'friday';
          break;
        case 6:
          correspondingDay = 'saturday';
          break;
        default:
          correspondingDay = '';
          break;
      }

      setInputs({ ...inputs, [name]: value, day: correspondingDay });
    } else {
      // Handle other inputs
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleEventClosed = () => {
    setOpen(false);
  };
  const handleEventNext = () => {
    if (!inputs.event) {
      ToastWarning('Please Select Event!');
      return;
    }
    setModels((prevVal) => ({
      ...prevVal,
      isEventModel: false,
      isDateTimeModel: true,
    }));
    setOpen(false);
  };
  const handleDateTimeClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
    }));
    setOpen(true);
  };
  const handleDateTimeNext = () => {
    if (!inputs.day) {
      ToastWarning('Please Select Day!');
      return;
    }
    if (!inputs.date) {
      ToastWarning('Please Select Date!');
      return;
    }
    if (!inputs.time) {
      ToastWarning('Please Select Time!');
      return;
    }
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
      isSummaryModel: true,
    }));
  };
  const handleSummaryClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: true,
      isSummaryModel: false,
    }));
  };
  const handleSummaryNext = async () => {
    setLoading(true);
    const body: BookingInputs = {
      ...inputs,
      userEmail: userEmail?.current?.email,
    };
    try {
      const response = await apiPostCall('/api/event/event', body);
      setLoading(false);
      console.log(response);
      if (response.success) {
        setInputs({ day: '', date: '', time: '', event: '' });
        setModels((prevVal) => ({
          ...prevVal,
          isSummaryModel: false,
        }));
        ToastSuccess(response?.message);
        setFetchAgain((prev) => !prev);
      } else {
        ToastError(response?.message);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      LogError('[EVENTSCHEDULE]', error);
      ToastError('Unable to Schedule Event Now, try again later!');
    }
  };
  const handleDirectSummaryClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
      isSummaryModel: false,
    }));
  };
  return (
    <>
      <EventModel
        open={open}
        handleClose={handleEventClosed}
        handleNext={handleEventNext}
        event={inputs.event}
        setEvent={handleInputs}
      />
      <DateTimeModel
        open={models.isDateTimeModel}
        handleClose={handleDateTimeClose}
        handleNext={handleDateTimeNext}
        date={inputs.date}
        day={inputs.day}
        time={inputs.time}
        event={inputs.event}
        handleInputs={handleInputs}
      />
      <SummaryModel
        open={models.isSummaryModel}
        handleClose={handleSummaryClose}
        handleNext={handleSummaryNext}
        handleDirectClose={handleDirectSummaryClose}
        date={inputs.date}
        day={inputs.day}
        event={inputs.event}
        time={inputs.time}
        loading={loading}
      />
    </>
  );
};

export default Booking;
