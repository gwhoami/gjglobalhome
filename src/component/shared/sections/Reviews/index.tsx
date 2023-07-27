import React, { useState, useRef, useEffect } from 'react';
import Wrapper from '../../Wrapper';
import Heading from '../../Headings/Heading';
import Review from './Review';
import LogError from '../../../../util/LogError';
import { Link } from 'react-router-dom';

interface Props {
  JSONDATA?: any;
}

function Reviews({ JSONDATA }: Props) {
  const latestElements = useRef([]);
  const [ui, setuiRefresh] = useState(-1);
  useEffect(() => {
    (async () => {
      if (JSONDATA[0]?.length > 0) {
        // Get the latest 6 elements from the JSONDATA array
        latestElements.current = JSONDATA[0].slice(-6);
        // LogError('[LATESTELEMENTS]', latestElements.current);
        setuiRefresh(Date.now());
      }
    })();
  }, [JSONDATA]);
  return (
    <>
      <Wrapper id="value" Style="w-full h-[100vh-80px] mt-20">
        <div className="w-full h-full lg:min-h-[250px] relative flex justify-center gap-2 pt-10 lg:bg-blue-main px-2">
          <div className="w-[50px] h-[50px] relative">
            <img
              src="/Navbar/People.png"
              alt=""
              className="w-full h-full object-contain hidden md:block"
            />
          </div>
          <Heading
            text="What Friends and Public Says"
            Style={'text-3xl lg:text-white text-black'}
          />
        </div>
        <div className="w-full h-full lg:absolute lg:top-32 lg:left-[2.8rem] flex flex-wrap justify-center gap-7 max-w-[1000px] mx-auto">
          {!latestElements.current.length ? (
            <Link
              to="/user/event/Custumerscomments"
              className="w-1/3 h-1/3 flex items-center justify-center rounded-2xl bg-black font-bold text-white"
            >
              <h1>No Review To Show, Kindly Add them!</h1>
            </Link>
          ) : (
            latestElements.current?.map(
              ({
                custDescription: text,
                id,
                clientEvent,
                firstName,
                lastName,
              }: any) => {
                // console.log(id, text, clientEvent, firstName, lastName);
                return (
                  <Review
                    key={id}
                    text={text}
                    clientEvent={clientEvent}
                    reveiwerName={`${firstName} ${lastName}`}
                  />
                );
              }
            )
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default React.memo(Reviews);
