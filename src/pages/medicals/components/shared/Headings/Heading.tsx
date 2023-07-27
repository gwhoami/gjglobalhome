interface Props {
  text: string;
  Style?: string;
}

const Heading = ({ text, Style = 'text-3xl' }: Props) => {
  return (
    <h1 className={`text-center font-bold capitalize ${Style}`}>{text}</h1>
  );
};

export default Heading;
