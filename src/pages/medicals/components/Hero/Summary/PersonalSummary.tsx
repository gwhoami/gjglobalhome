import { useState, useEffect, useContext } from 'react';
import InfoBox from './InfoBox';
import { apiGetCall } from '../../../../../helper/API';
import { ToastError } from '../../../../../component/shared/Notification';
import { MedicalContext } from '../../../contexts/mainContext';

const PersonalSummary: React.FC = () => {
  const { fetchAgain } = useContext(MedicalContext);
  const [userSummaryData, setUserSummaryData] = useState({
    dateOfBirth: '',
    age: '',
    gender: '',
    location: '',
    totalEvents: '',
    yearOfExperience: '',
    availableLocation: '',
    rateLevel: '',
    averageEventPrice: '',
    currentLocation: '',
    img: '',
  });
  useEffect(() => {
    (async () => {
      const res = await apiGetCall('/api/event/summary');
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        const {
          dateOfBirth,
          age,
          gender,
          location,
          totalEvents,
          yearOfExperience,
          availableLocation,
          rateLevel,
          averageEventPrice,
          currentLocation,
          img,
        } = res?.ownerSummaryData;
        setUserSummaryData({
          dateOfBirth,
          age,
          gender,
          location,
          totalEvents,
          yearOfExperience,
          availableLocation,
          rateLevel,
          averageEventPrice,
          currentLocation,
          img,
        });
        return;
      }
    })();
  }, [fetchAgain]);

  return (
    <div className="w-full max-w-[400px] h-full flex flex-col items-center justify-center gap-4 py-10 rounded-2xl shadow-black shadow-md">
      <div className="w-[100px] h-[100px] relative rounded-full ">
        <img
          src={userSummaryData.img}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="font-bold text-2xl">My Summary</h1>
      <div className="w-full h-full grid text-center">
        <InfoBox
          Name="Date of Birth/Age"
          Value={`${userSummaryData.dateOfBirth} ${userSummaryData.age}`}
        />
        <InfoBox Name="Gender" Value={userSummaryData.gender} />
        <InfoBox Name="Location" Value={userSummaryData.location} />
        <InfoBox
          Name="Years of Experience"
          Value={userSummaryData.yearOfExperience}
        />
        <InfoBox Name="Total Events" Value={userSummaryData.totalEvents} />
        <InfoBox
          Name="Available Location"
          Value={userSummaryData.availableLocation}
        />
        <InfoBox Name="Rate Level" Value={userSummaryData.rateLevel} />
        <InfoBox
          Name="Arrange Event Price"
          Value={userSummaryData.averageEventPrice}
        />
        <InfoBox
          Name="Current Location"
          Value={userSummaryData.currentLocation}
        />
      </div>
    </div>
  );
};

export default PersonalSummary;
