import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
interface Props {
  category: string;
  memberName: string;
  about: string;
  faceBookURL: string;
  // instagramURL: string;
  // twitterURL: string;
}

const TeamCard: React.FC<Props> = ({
  category,
  memberName,
  about,
  faceBookURL,
}) => {
  return (
    <div className="w-full h-full max-w-[320px] max-h-[350px] flex flex-col justify-center items-center gap-4 shadow-black shadow-md py-6 rounded-2xl">
      <div className=" w-[100px] h-[100px] rounded-full relative">
        <img
          src="/noavatar.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h5 className="font-bold text-lg text-grey-light text-center">{category}</h5>
        <h1 className="text-xl">{memberName}</h1>
      </div>
      <p className="text-center px-4">{about}</p>
      <div className="flex gap-5 text-3xl text-blue-main">
        <Link to={faceBookURL} rel="noopener noreferrer">
          <FaFacebook />
        </Link>
        {/* <Link to={instagramURL} rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link to={twitterURL} rel="noopener noreferrer">
          <AiFillTwitterCircle />
        </Link> */}
      </div>
    </div>
  );
};

export default TeamCard;
