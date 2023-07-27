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
import LogError from '../../../../util/LogError';

interface Props {
  SLIDERJSON: Array<Object>;
  contactInfo: any;
}

function ContactUs({ SLIDERJSON, contactInfo }: Props) {
  // LogError('[CONTACTDATA]', contactInfo);
  const [contactInformation, setContactInformation] = useState({
    address: '',
    phoneNumber: '',
    fax: '',
    email: '',
  });
  useEffect(() => {
    if (contactInfo[0]) {
      const { mainOfficeAddress, phoneNo, faxAddress, email } = contactInfo[0];
      setContactInformation((prevData) => ({
        ...prevData,
        address: mainOfficeAddress,
        phoneNumber: phoneNo,
        fax: faxAddress,
        email: email,
      }));
    }
  }, [contactInfo]);
  

  return (
    <Wrapper id="contactus" Style="w-full h-[100vh-80px] p-5">
      <div className="w-full h-full flex flex-wrap justify-center md:grid lg:grid-cols-2 mx-auto md:mx-4 lg:mx-0 gap-2">
        <div className="w-full h-full flex justify-center items-center px-4 mx-auto relative md:shadow-black md:shadow-md rounded-lg">
          <AutoSlider JSONDATA={SLIDERJSON} />
        </div>
        <ContactForm />
      </div>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        {contactInfo ? (
          <>
            <ContactInfoBox
              icon={MdLocationOn}
              title={'OUR MAIN OFFICE'}
              about={contactInformation.address}
            />
            <ContactInfoBox
              icon={BsFillTelephoneFill}
              title={'PHONE NUMBER'}
              about={contactInformation.phoneNumber}
            />
            <ContactInfoBox
              icon={MdFax}
              title={'FAX'}
              about={contactInformation.fax}
            />
            <ContactInfoBox
              icon={GrMail}
              title={'EMAIL'}
              about={contactInformation.email}
            />
          </>
        ) : (
          <h1>No contact Info to Show</h1>
        )}
      </div>
    </Wrapper>
  );
}

export default ContactUs;
