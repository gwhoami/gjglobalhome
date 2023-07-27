import Wrapper from '../../Wrapper';
import Heading from '../../Headings/Heading';
import SubHeading from '../../Headings/SubHeading';
import TeamCard from './TeamCard';
import LogError from '../../../../util/LogError';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Team({ teamData }: any) {
  // LogError('[TEAMDATA]', teamData[0]);
  const latestElements = useRef([]);
  const [ui, setuiRefresh] = useState(-1);
  useEffect(() => {
    (async () => {
      if (teamData[0]?.length > 0) {
        // Get the latest 6 elements from the JSONDATA array
        latestElements.current = teamData[0].slice(-6);
        LogError('[LATESTELEMENTS]', latestElements.current);
        setuiRefresh(Date.now());
      }
    })();
  }, [teamData]);
  return (
    <Wrapper id="team" Style="w-full h-[100vh - 80px] mt-20">
      <div className="w-full h-full flex flex-col items-center">
        <Heading text="Team" />
        <SubHeading
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima totam
          quidem deserunt odio voluptatibus esse odit adipisci autem, ut saepe?"
        />

        <div className="w-full h-full flex flex-wrap justify-center gap-[3.7rem] mt-8">
          {!latestElements.current.length ? (
            <Link
              to="/user/event/team"
              className=" p-4 w-1/3 h-1/3 flex items-center justify-center rounded-2xl bg-black font-bold text-white"
            >
              <h1>No Team Member To Show, Kindly Add them!</h1>
            </Link>
          ) : (
            latestElements.current?.map(
              ({
                id,
                firstName,
                lastName,
                responsible,
                description,
                socialMedia,
              }: any) => {
                return (
                  <TeamCard
                    key={id}
                    memberName={`${firstName} ${lastName}`}
                    category={responsible}
                    about={description}
                    faceBookURL={socialMedia}
                  />
                );
              }
            )
          )}
          {/* {teamData[0] ? (
            <>
              {teamData[0]?.map(
                ({
                  id,
                  firstName,
                  lastName,
                  responsible,
                  description,
                  socialMedia,
                }: any) => {
                  return (
                    <TeamCard
                      key={id}
                      memberName={`${firstName} ${lastName}`}
                      category={responsible}
                      about={description}
                      faceBookURL={socialMedia}
                    />
                  );
                }
              )}
            </>
          ) : (
            <h1>No Team Member to Show</h1>
          )} */}
        </div>
      </div>
    </Wrapper>
  );
}

export default React.memo(Team);
