import React from 'react';
import Wrapper from '../../Wrapper';
import Heading from '../../Headings/Heading';
import SubHeading from '../../Headings/SubHeading';

import Stats from './Stats';

import { FaHandshake, FaAward } from 'react-icons/fa';
import { BiCalendarStar } from 'react-icons/bi';
import { BsReception4 } from 'react-icons/bs';

interface Props {
  count: number | undefined | string;
} 

const Statistics = ({ count }: Props) => {
  // console.log(count)
  return (
    <Wrapper id="award" Style="w-full h-[100vh-80px] mt-20">
      <div className="w-full h-full flex flex-col items-center">
        <Heading text="Where we are and what" />
        <SubHeading
          text="We provide expert bussiness coaching to both indiviuals and
            bussiness.With over 30 years of experience we will ensure that you
            are always getting best guidance from the top people in the entire
            industry"
        />
        <div className="w-full h-full flex flex-wrap justify-center gap-2 mt-8">
          <Stats count={count || 0} about={'Events'} icon={BiCalendarStar} />
          <Stats count={count || 0} about="Clients" icon={FaHandshake} />
          <Stats count={16} about="Success" icon={BsReception4} />
          <Stats count={10} about="Awards" icon={FaAward} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Statistics;
