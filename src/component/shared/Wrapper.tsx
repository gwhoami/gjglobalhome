import React from 'react';

interface Props {
  id?: string;
  Style?: string;
  children: React.ReactNode;
}

function Wrapper({ id, Style, children }: Props) {
  return (
    <section id={id} className={Style}>
      <div className="w-full h-full max-w-[1080px] mx-auto relative">
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
