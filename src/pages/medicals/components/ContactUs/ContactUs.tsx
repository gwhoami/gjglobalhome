import { useState, useEffect } from 'react';
import Wrapper from '../shared/Wrapper';
import AutoSlider from '../../../../component/shared/Slider/AutoSlider';
import ContactInfoBox from './ContactInfoBox';
import ContactForm from './ContactForm';

import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdFax, MdLocationOn } from 'react-icons/md';

import { ToastError } from '../../../../component/shared/Notification';
import { apiGetCall } from '../../../../helper/API';



interface Props {
  SLIDERJSON: Array<Object>;
}



function ContactUs({ SLIDERJSON }: Props) {
  const [contactInfo, setContactInfo] = useState({
    address: '',
    phoneNumber: '',
    fax: '',
    email: '',
  });
  useEffect(() => {
    (async () => {
      const res = await apiGetCall('/api/event/contactus');
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        const { address, phoneNumber, fax, email } = res?.contactData;
        setContactInfo({ address, phoneNumber, fax, email });
        return;
      }
    })();
  }, []);
  const { address, phoneNumber, fax, email } = contactInfo;

  return (
    <Wrapper id="contactus" Style="w-full h-[100vh-80px] p-5">
      <div className="w-full h-full flex flex-wrap justify-center md:grid lg:grid-cols-2 mx-auto md:mx-4 lg:mx-0 gap-2">
        <div className="w-full h-full flex justify-center items-center px-4 mx-auto relative md:shadow-black md:shadow-md rounded-lg">
          <AutoSlider JSONDATA={SLIDERJSON} />
        </div>
        <ContactForm />
      </div>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <ContactInfoBox
          icon={MdLocationOn}
          title={'OUR MAIN OFFICE'}
          about={address}
        />
        <ContactInfoBox
          icon={BsFillTelephoneFill}
          title={'PHONE NUMBER'}
          about={phoneNumber}
        />
        <ContactInfoBox icon={MdFax} title={'FAX'} about={fax} />
        <ContactInfoBox icon={GrMail} title={'EMAIL'} about={email} />
      </div>
    </Wrapper>
  );
}

export default ContactUs;
