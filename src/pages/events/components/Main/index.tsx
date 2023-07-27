import Wrapper from '../shared/Wrapper';
import AutoSlider from '../shared/Slider/AutoSlider';
import PersonalSummary from './Summary';
import Schedule from './Schedule';
import LogError from '../../../../util/LogError';
import { useRef, useState } from 'react';

function Hero({ generalData }: any) {
  // LogError('[HeroDATA]', generalData);
  const generalInformation = useRef({
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    dob: '',
    gender: '',
    state: '',
    totalEvent: '',
    rateLevel: '',
    yearExp: '',
    avgeventPrice: '',
    documents: [],
    currentLocation: '',
  });
  const countVal = useRef('');
  const { general, events, count } = generalData;
  if (count) {
    countVal.current = count;
  }

  // {count && }
  if (general[0]) {
    console.log('Hello World');
    const {
      firstName,
      lastName,
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
    } = general[0];
    generalInformation.current.firstName = firstName;
    generalInformation.current.lastName = lastName;
    generalInformation.current.age = age;
    generalInformation.current.country = country;
    generalInformation.current.dob = dob;
    generalInformation.current.gender = gender;
    generalInformation.current.state = state;
    generalInformation.current.totalEvent = totalEvent;
    generalInformation.current.rateLevel = rateLevel;
    generalInformation.current.yearExp = yearExp;
    generalInformation.current.avgeventPrice = avgeventPrice;
    generalInformation.current.documents = documents;
    generalInformation.current.currentLocation = currentLocation;
  }

  return (
    <>
      <Wrapper id="profile" Style="w-full h-[100vh-80px] mt-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center text-xl md:text-3xl font-bold">
            {generalInformation.current.firstName}
            's Event Managment Support
          </h1>
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            {generalInformation.current.firstName}
            {generalInformation.current.lastName}
          </h1>
        </div>
        <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-8 px-6 lg:px-0 md:px-4">
          <PersonalSummary
            summaryData={generalInformation.current}
            count={countVal.current}
          />
          <div className="w-full h-full max-w-[300px] md:max-w-[400px] md:max-h-[626px] flex justify-center items-center rounded-2xl shadow-black shadow-md overflow-hidden ">
            <AutoSlider />
          </div>
          <Schedule eventsData={events} />
        </div>
      </Wrapper>
    </>
  );
}

export default Hero;
