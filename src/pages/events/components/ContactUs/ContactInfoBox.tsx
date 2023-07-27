import { IconType } from 'react-icons';
interface Props {
  icon: IconType;
  title: string;
  about: string;
}

const ContactInfoBox:React.FC<Props> = ({  icon: Icon, title, about }) => {
  return (
    <div className="w-full h-full min-h-[250px] sm:max-w-[250px] lg:max-w-[258px] flex flex-col justify-center items-center gap-4 px-4 md:px-0 py-5  rounded-lg shadow-black shadow-md">
      <span className="text-5xl font-bold text-cyan-main">
        <Icon />
      </span>
      <h1 className="uppercase font-bold text-2xl">{title}</h1>
      <p className="text-xl font-normal text-center ">{about}</p>
    </div>
  );
};

export default ContactInfoBox;
