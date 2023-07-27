import { useEffect, useState } from 'react';

//Can't made its reusable separate components,have to copy its
import Hero from './components/Hero/Hero';
import ContactUs from './components/ContactUs/ContactUs';

//All of them are reusbale separate components
import Navbar from '../../component/shared/sections/Navigation/Navbar';
import Statistics from '../../component/shared/sections/Statistics';
import Focus from '../../component/shared/sections/Focus';
import Service from '../../component/shared/sections/Services';
import Gallery from '../../component/shared/sections/Gallery';
import Reviews from '../../component/shared/sections/Reviews';
import Team from '../../component/shared/sections/Team';

import FocusJSON from '../../constants/sections/Focus.json';
import ServiceJSON from '../../constants/sections/Services.json';
import CarousalJSON from '../../constants/sections/Gallery/Carousal.json';
import VideoJSON from '../../constants/sections/Gallery/Videos.json';
import ReviewJSON from '../../constants/sections/Review.json';
import NavigationJSON from '../../constants/sections/Navigation.json';
import AutoSliderJSON from '../../constants/sections/AutoSlider.json';

import { ToastError } from '../../component/shared/Notification';
import { apiGetCall } from '../../helper/API';
import LogError from '../../util/LogError';
import { MedicalContext } from './contexts/mainContext';

const Medical: React.FC = () => {
  const [fetchAgain, setFetchAgain] = useState<boolean>(false);
  //To store data of Team Section getting from DB
  const [teamData, setTeamData] = useState([]);
  //To store count of Events
  const [count, setCount] = useState<number | undefined>();
  useEffect(() => {
    (async () => {
      const res = await apiGetCall('/api/event/team');
      LogError('[FetchedTeamData]', res);
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        setTeamData(res?.teamData);
        return;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await apiGetCall('/api/event/count');
      LogError('[FetchedCountData]', res);
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        console.log(res);
        setCount(res?.count);
        return;
      }
    })();
  }, [fetchAgain]);

  return (
    <MedicalContext.Provider value={{ fetchAgain, setFetchAgain }}>
      <Navbar JSONDATA={NavigationJSON.medical} />
      <Hero />
      <Focus JSONDATA={FocusJSON.medical} />
      <Service JSONDATA={ServiceJSON.medical} />
      <Team teamData={teamData} />
      <Statistics count={count} />
      <Gallery
        CAROUSALJSONDATA={CarousalJSON.medical}
        VEDEOSJSONDATA={VideoJSON.medical}
      />
      <ContactUs SLIDERJSON={AutoSliderJSON.medical} />

      <Reviews JSONDATA={ReviewJSON.medical} />
    </MedicalContext.Provider>
  );
};

export default Medical;
