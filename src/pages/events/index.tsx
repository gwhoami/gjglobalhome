import { useEffect, useState, useRef } from 'react';

//Can't made its reusable separate components,have to copy its
import Hero from './components/Main';
import ContactUs from './components/ContactUs/ContactUs';

//All of them are reusbale separate components
import Navbar from '../../component/shared/sections/Navigation/Navbar';
import Statistics from '../../component/shared/sections/Statistics';
import Focus from '../../component/shared/sections/Focus';
import Gallery from '../../component/shared/sections/Gallery';
import Reviews from '../../component/shared/sections/Reviews';
import Team from '../../component/shared/sections/Team';

import FocusJSON from '../../constants/sections/Focus.json';
import CarousalJSON from '../../constants/sections/Gallery/Carousal.json';
import VideoJSON from '../../constants/sections/Gallery/Videos.json';
import ReviewJSON from '../../constants/sections/Review.json';
import NavigationJSON from '../../constants/sections/Navigation.json';
import AutoSliderJSON from '../../constants/sections/AutoSlider.json';

import { ToastError } from '../../component/shared/Notification';
import BackToTop from '../../component/shared/BackToTop';
import { apiPostCall } from '../../helper/API';
import LogError from '../../util/LogError';
import MyLocalStorage from '../../util/mylocalStorage';
import Spinner from '../../component/shared/Spinner/Spinner';

interface InTeam {
  id: string;
  firstName: string;
  secondName: string;
  description: string;
  noExperiance: string;
  responsible: string;
  socialMedia: string;
}

interface InReview {
  id: string;
  firstName: string;
  secondName: string;
  description: string;
}

const Event: React.FC = () => {
  const [heroData, setHeroData] = useState({ general: [], events: [] });
  const [teamdata, setTeamData] = useState<InTeam[]>([]);
  const [reviewsData, setReviewsData] = useState<InReview[]>([]);
  const [ui, uiRefresh] = useState(-1);
  const pageData = useRef({ init: false, _id: '' });
  const count = useRef('');
  useEffect(() => {
    (async () => {
      let search = [
        {
          _modal: 'EventList',
          _find: { userid: MyLocalStorage.getUserId() },
          _mode: 'single',
          _select:
            'general menu team focus achievement custcomment gallery schedule',
        },
      ];
      const res = await apiPostCall('/api/common/common_search', {
        _list: search,
      });
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        const {
          achievement,
          custcomment,
          focus,
          gallery,
          general,
          menu,
          schedule,
          team,
        } = res;
        // LogError('[HEROFETCHEDDATA]', res);
        count.current = schedule?.length;
        setHeroData((prevData) => ({
          ...prevData,
          general,
          events: schedule,
          count: count.current,
        }));
        setTeamData((prevData) => [...prevData, team]);
        setReviewsData((prevData) => [...prevData, custcomment]);
      }
      pageData.current.init = true;
      uiRefresh(Date.now());
    })();
  }, []);
  if (!pageData.current.init)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Spinner size="60" />
      </div>
    );
  else
    return (
      <div className="relative">
        <BackToTop />
        <Navbar JSONDATA={NavigationJSON.event} />
        <Hero generalData={heroData} />
        <Focus JSONDATA={FocusJSON.event} />
        <Team teamData={teamdata} />
        <Statistics count={count.current} />
        <Gallery
          CAROUSALJSONDATA={CarousalJSON.event}
          VEDEOSJSONDATA={VideoJSON.event}
        />
        <ContactUs
          SLIDERJSON={AutoSliderJSON.event}
          contactInfo={heroData.general}
        />
        <Reviews JSONDATA={reviewsData} />
      </div>
    );
};

export default Event;
