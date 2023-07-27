import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
const BackToTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <button
        className="fixed bottom-10 right-10 bg-blue-main rounded-full p-2 text-white
        "
        onClick={scrollUp}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default BackToTop;
