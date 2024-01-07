import React from 'react';
import UserSvg from '../assets/user.svg';

function Introduction() {
  return (
    <>
      <div className="text-center font-black">
        <p className="text-[1rem] sm:text-[1.75rem]">Hello!</p>
        <h1 className="text-[1.5rem] sm:text-[2.5rem]">
          I&lsquo;m <span className="text-[#007FFF]">Ben</span>, and I am a
          <br /> Front-End Developer.
        </h1>
      </div>
      <div className="bg-primary m-auto flex h-[15rem] w-[15rem] translate-y-16 rounded-full sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[25rem] lg:w-[25rem]">
        <img
          className="translate-y-8 lg:translate-y-20"
          src={UserSvg}
          alt="User"
        />
      </div>
    </>
  );
}

export default Introduction;
