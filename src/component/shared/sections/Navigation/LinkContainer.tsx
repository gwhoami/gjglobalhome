import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
  text: string;
  link: string;
  Style?: string;
}

const LinkContainer: React.FC<Props> = ({ text, link, Style }) => {
  return (
    <Link to={link} smooth>
      <button
        className={`font-bold w-36 py-2 bg-blue-main text-white hover:bg-grey-main hover:text-black   flex items-center justify-center ${Style} uppercase`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkContainer