import Wrapper from '../../Wrapper';
import Heading from '../../Headings/Heading';
import SubHeading from '../../Headings/SubHeading';
import ServiceTab from './ServiceTab';

interface Props {
  JSONDATA: Array<Object>;
}

function index({ JSONDATA }: Props) {
  return (
    <Wrapper id="focus" Style="w-full h-[100vh-80px] mt-20">
      <div className="w-full h-full flex flex-col items-center">
        <Heading text="Our Services" />
        <Heading text="Our Services" />
        <SubHeading
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolorem explicabo deleniti? Eveniet reprehenderit sint libero
          quibusdam magni perspiciatis placeat maiores quia dolor repellat?
          Explicabo quae deserunt cum. Tenetur dignissimos deserunt error
          voluptates perferendis optio eum veniam quos obcaecati neque."
        />
        <div className="w-full h-full flex flex-wrap justify-center gap-2 mt-8">
          {JSONDATA?.map(({ id, text, image }: any) => {
            return <ServiceTab key={id} text={text} image={image} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
