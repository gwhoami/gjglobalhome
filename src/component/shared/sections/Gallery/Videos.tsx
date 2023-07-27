import Wrapper from '../../Wrapper';
import VideoJSON from '../../../../constants/Event/Video.json';

interface Props {
  JSONDATA: Array<Object>;
}

const Videos: React.FC<Props> = ({ JSONDATA }) => {
  return (
    <Wrapper Style="w-full h-full relative ">
      <div className="w-full h-full grid sm:grid-cols-2 md:grid:cols-3 lg:grid-cols-4 gap-5 place-items-center lg:gap-8 mt-16 px-3 md:px-4 lg:px-0">
        {JSONDATA?.map(({ id, source, content }: any) => {
          return (
            <iframe
              key={id}
              src={`${source}?autoplay=1&mute=1&enablejsapi=1`}
              title={content}
              allow="autoplay"
              className="w-full h-full"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Videos;
