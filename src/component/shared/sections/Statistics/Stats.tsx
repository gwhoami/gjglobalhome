import React from 'react'
import { IconType } from 'react-icons';
interface Props {
  count: number | undefined | string;
  about: string;
  icon: IconType;
}

function Stats  ({ icon: Icon, count, about }:Props) {
  return (
    <div className="w-full h-full max-w-[200px] lg:max-w-[227px] flex flex-col justify-center items-center gap-4 px-10 py-10 rounded-lg  shadow-black shadow-md ">
      <Icon className="text-3xl" />
      <h1 className="font-bold text-5xl">{count }  </h1>
      <p className="uppercase font-semibold">{about}</p>
    </div>
  );
};

export default Stats;
