import Wrapper from '../shared/Wrapper';
import AutoSlider from '../shared/Slider/AutoSlider';
import PersonalSummary from './Summary/PersonalSummary';
import Schedule from './Schedule/Schedule';

function Hero() {
  return (
    <>
      <Wrapper id="profile" Style="w-full h-[100vh-80px] mt-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center text-xl md:text-3xl font-bold">
            My Health
          </h1>
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Loretta Magdalen Justin
          </h1>
        </div>
        <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-8 px-6 lg:px-0 md:px-4">
          <PersonalSummary />
          <div className="w-full h-full max-w-[300px] md:max-w-[400px] md:max-h-[626px] flex justify-center items-center rounded-2xl shadow-black shadow-md overflow-hidden ">
            {/* <div className="w-full h-full mx-auto relative "> */}
            <AutoSlider />
            {/* </div> */}
          </div>
          <Schedule />
        </div>
      </Wrapper>
    </>
  );
}

export default Hero;
