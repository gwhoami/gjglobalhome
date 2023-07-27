import { ImQuotesLeft } from 'react-icons/im';
interface Props {
  image?: string;
  text: string;
  clientEvent?: string;
  custDescription?: string;
  custEmailid?: string;
  reveiwerName?: string;
  id?: string;
  phoneEvent?: string;
}

const Review: React.FC<Props> = ({
  image,
  text,
  clientEvent,
  reveiwerName,
}) => {
  return (
    <div className="w-full h-full max-w-[300px] min-h-[400px]  flex flex-col bg-white border rounded-3xl px-6 pt-10 pb-6 gap-4 shadow-black shadow-md">
      <div className="flex items-start justify-start">
        <div className="text-5xl font-bold text-blue-main">
          <ImQuotesLeft />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <h1 className="w-full h-full flex justify-center items-center text-3xl font-bold">
          {reveiwerName}
        </h1>
        <h2 className="w-full h-full flex justify-center items-center text-xl ">
          {clientEvent}
        </h2>
      </div>

      <p className="w-full h-full flex justify-center items-center text-grey-light">
        {text}
      </p>
      <div className=" w-[100px] max-w-[100px] mx-auto h-[100px] rounded-full relative">
        <img
          src="/noavatar.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Review;
