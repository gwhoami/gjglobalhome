import LinkContainer from './LinkContainer';

interface Props {
  JSONDATA: any;
}

const NavLinks = ({JSONDATA}:Props) => {
  return (
    <div className="w-full h-full hidden lg:flex justify-center">
      {JSONDATA?.map(({ link, text, id }: any) => {
        return id === 1 ? (
          <LinkContainer link={`${link}`} text={text} key={id} />
        ) : (
          <LinkContainer link={link} text={text} key={id} Style="ml-4" />
        );
      })}
    </div>
  );
};

export default NavLinks;
