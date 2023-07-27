import React, { Fragment, useEffect, useState } from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';

import Wrapper from '../../Wrapper';

import NavLinks from './NavLinks';
import LinkContainer from './LinkContainer';

interface Props {
  JSONDATA: any;
}

function Navbar({ JSONDATA }: Props) {
  //For Side Drawer
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // console.log(Show, lastScrollY);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  });
  return (
    <Fragment>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        pauseOnHover={false}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
      />
      <Wrapper
        Style={`w-full md:h-[80px] h-[70px] md:sticky top-0 z-[500] transition-all duration-1000 ${
          Show && 'md:-top-[100px] overflow-hidden relative'
        }`}
        id="navbar"
      >
        {/* Navbar Links */}
        <NavLinks JSONDATA={JSONDATA.NavLinks} />
        <div
          onClick={toggleDrawer}
          className="lg:hidden absolute top-4 right-4 text-3xl"
        >
          <FaBars />
        </div>
        {/* Drawer Links */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="w-full h-full flex flex-col justify-center items-center gap-4 relative"
        >
          <div className="absolute -top-4 left-0 flex flex-col justify-center items-center py-6">
            <img
              src={'/logo.png'}
              alt="logo"
              className="w-[80px] h-[80px] object-contain"
            />
          </div>
          <div
            className="absolute top-4 right-4 text-3xl text-blue-main"
            onClick={toggleDrawer}
          >
            <ImCross />
          </div>
          {JSONDATA.NavLinks?.map(({ link, text }: any) => {
            return <LinkContainer key={text} link={link} text={text} />;
          })}
        </Drawer>
      </Wrapper>
    </Fragment>
  );
}

export default Navbar;
