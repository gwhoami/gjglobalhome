import Heading from '../../Headings/Heading';
import Wrapper from '../../Wrapper';
import Carousal from './Carousal';
import Videos from './Videos';

interface Props {
  CAROUSALJSONDATA: Array<Object>;
  VEDEOSJSONDATA: Array<Object>;
}

function index({ CAROUSALJSONDATA, VEDEOSJSONDATA }: Props) {
  return (
    <>
      <Wrapper id="gallery" Style=" h-[100vh-80px] mt-20 ">
        <Heading text="Our Gallery" />
        <div className="w-full h-full flex mt-8 px-8 mb-5">
          <Carousal JSONDATA={CAROUSALJSONDATA} />
        </div>
        {/* <Videos JSONDATA={VEDEOSJSONDATA} /> */}
      </Wrapper>
    </>
  );
}

export default index;
