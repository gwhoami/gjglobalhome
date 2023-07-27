interface Props {
  image: string;
  text: string;
}

const ServiceTab: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="w-full h-full max-w-[300px] max-h-[250px] flex flex-col justify-center items-center gap-4 px-12 py-10 border rounded-xl shadow-black shadow-md hover:shadow-none hover:border-none">
      <img src={image} alt="" className="w-[120px] h-[120px] object-contain" />
      <h1 className="capitalize text-xl font-semibold">{text}</h1>
    </div>
  );
};

export default ServiceTab;
