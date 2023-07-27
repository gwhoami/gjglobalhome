interface Props {
  image: string;
  text: string;
}

const NavLogo: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt={text}
        className="w-[40px] h-[40px] object-contain"
      />
      <h1>{text}</h1>
    </div>
  );
};

export default NavLogo;
