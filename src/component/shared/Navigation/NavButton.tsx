import { Link } from 'react-router-dom';

interface Props {
  Style?: string;
  text: string;
  link: string;
}

const NavButton: React.FC<Props> = ({ Style, text, link }) => {
  return (
    <Link to={link}>
      <button
        className={`w-full h-full px-5 py-[8px] rounded-[3rem] border font-bold hover:bg-blue-main hover:text-white ${Style}`}
      >
        {text}
      </button>
    </Link>
  );
};
export default NavButton;
