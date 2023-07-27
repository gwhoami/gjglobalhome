interface Props {
  text: string;
  Style?: string;
}

const SubHeading = ({ text, Style }: Props) => {
  return (
    <p
      className={`mt-2 mx-auto max-w-[580px] text-center px-3 md:px-0 ${Style}`}
    >
      {text}
    </p>
  );
};

export default SubHeading;
