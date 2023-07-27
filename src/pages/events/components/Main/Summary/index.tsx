import InfoBox from './InfoBox';
import formatDate from '../../../../../util/Formats/formatDate';
import LogError from '../../../../../util/LogError';
import { useRef } from 'react';

function PersonalSummary({ summaryData, count = '' }: any) {
  // LogError('[SummaryDATA]', summaryData);
  const {
    age,
    country,
    dob,
    gender,
    state,
    totalEvent,
    rateLevel,
    yearExp,
    avgeventPrice,
    documents,
    currentLocation,
  } = summaryData;
  const dateOfBirth = '' || formatDate(dob);

  return (
    <div className="w-full max-w-[400px] h-full flex flex-col items-center justify-center gap-4 py-10 rounded-2xl shadow-black shadow-md">
      <div className="w-[100px] h-[100px] relative rounded-full ">
        <img
          src={'/noavatar.png'}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-bold text-2xl">My Summary</h1>
      <div className="w-full h-full grid text-center">
        <InfoBox Name="Date of Birth/Age" Value={`${dateOfBirth} ${age}`} />
        <InfoBox Name="Gender" Value={gender} />
        <InfoBox Name="Location" Value={country} />
        <InfoBox Name="Years of Experience" Value={yearExp} />
        <InfoBox Name="Total Events" Value={count || 0} />
        <InfoBox Name="Available Location" Value={currentLocation} />
        <InfoBox Name="Rate Level" Value={rateLevel} />
        <InfoBox
          Name="Arrange Event Price"
          Value={`$0` || `$${avgeventPrice}`}
        />
        <InfoBox Name="Current Location" Value={state} />
      </div>
    </div>
  );
}

export default PersonalSummary;
