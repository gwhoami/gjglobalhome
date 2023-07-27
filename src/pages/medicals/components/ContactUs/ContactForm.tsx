import InputField from '../../../../component/shared/Inputs/InputField';
import { TiMail } from 'react-icons/ti';
import { IoIosContact } from 'react-icons/io';
import Spinner from '../../../../component/shared/Spinner/Spinner';
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from '../../../../component/shared/Notification';
import LogError from '../../../../util/LogError';
import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { apiPostCall } from '../../../../helper/API';

interface ContactInputs {
  email: string;
  name: string;
  address: string;
  message: string;
}
const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ContactInputs>({
    email: '',
    name: '',
    address: '',
    message: '',
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      ToastWarning('Invalid email format');
      return;
    }
    setLoading(true);
    const body: ContactInputs = { ...inputs };
    try {
      const res = await apiPostCall('/api/event/contactForm', body);
      setLoading(false);
      if (res.isError) {
        ToastError(res.Error.response.data.message);
        return;
      } else {
        if (res.status === 200) {
          setInputs({ email: '', name: '', address: '', message: '' });
          ToastSuccess(res.message);
        } else {
          ToastError(res.message);
        }
      }
    } catch (error) {
      setLoading(false);
      LogError('[ContactUS]', error);
      ToastError('Unable to Contact Us Now, try again later!');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" grid gap-6 p-5 py-7 sm:p-6 md:p-8 lg:p-12 shadow-black shadow-md rounded-lg"
    >
      <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      <div className="w-full h-full flex flex-col md:flex-row gap-4">
        <InputField
          type="text"
          name="email"
          id="email"
          title="Email"
          placeholder="Email"
          state={inputs.email}
          setState={handleInputs}
          compulsory={true}
          disabled={false}
          icon={TiMail}
          IconStyle="bottom-5"
        />
        <InputField
          type="text"
          name="name"
          id="name"
          title="Name"
          placeholder="Name"
          state={inputs.name}
          setState={handleInputs}
          compulsory={true}
          disabled={false}
          icon={IoIosContact}
          IconStyle="bottom-5"
        />
      </div>
      <InputField
        type="text"
        name="address"
        id="address"
        title="Address"
        placeholder="Address"
        state={inputs.address}
        setState={handleInputs}
        compulsory={true}
        disabled={false}
        icon={MdLocationOn}
        IconStyle="bottom-5"
      />
      <div className="w-full flex flex-col gap-2 justify-start">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message"
          name="message"
          id="message"
          className="font-[500] text-[16px] border bg-gray-50 px-2.5 h-28 rounded-lg"
          required={true}
          value={inputs.message}
          onChange={handleTextArea}
        />
      </div>

      <button
        type={loading ? 'button' : 'submit'}
        className="bg-blue-main text-white font-bold text-[16px] rounded-lg px-4 py-3  focus:outline-none"
      >
        {loading ? <Spinner size={15} /> : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
