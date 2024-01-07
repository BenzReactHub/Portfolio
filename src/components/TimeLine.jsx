import React from 'react';
import Arrow from '../assets/timeline-arrow.svg';

function TimeLine({title}) {
  return (
    <>
      <h3 className="text-center text-3xl lg:text-5xl font-black pt-32 pb-12 lg:pb-0 lg:translate-y-24">{title}</h3>
      <div
        className="overflow-hidden transition-all delay-300 duration-200 lg:m-auto lg:w-[30rem] lg:rotate-90 lg:scale-105 lg:p-0 xl:scale-110 2xl:scale-125"
      >
        <Row position="translate-x-6">
          <Year year={2019} position="left" />
          <Item title="Title Text" />
        </Row>
        <Row position="-translate-x-7 -translate-y-[4px]">
          <Item title="Title Text" />
          <Year year={2020} position="right" />
        </Row>
        <Row position="translate-x-6 -translate-y-[8px]">
          <Year year={2021} position="left" />
          <Item title="Title Text" />
        </Row>
        <Row position="-translate-x-7 -translate-y-[12px]">
          <Item title="Title Text" />
          <Year year={2022} position="right" />
        </Row>
        <Row position="translate-x-6 -translate-y-[16px]">
          <Year year={2023} position="left" />
          <Item title="Title Text" />
        </Row>
      </div>
    </>
  );
}

function Row({ children, position }) {
  return <div className={`flex justify-center ${position}`}>{children}</div>;
}

function Year({ year, position }) {
  let radiusStyle = '';
  let circleStyle = '';
  let arrowStyle = '';
  if (position === 'right') {
    radiusStyle = 'border-r-4 rounded-r-[3rem]';
    circleStyle = '-left-2';
    arrowStyle = '-left-14 rotate-180';
  }
  if (position === 'left') {
    radiusStyle = 'border-l-4 rounded-l-[3rem]';
    circleStyle = '-right-2';
    arrowStyle = '-right-14';
  }
  return (
    <div
      className={`box-content flex w-[10rem] items-center justify-center border-b-4 border-t-4 border-[#00619a] ${radiusStyle}`}
    >
      <div className="bg-primary relative flex h-[6rem] w-[6rem] flex-col justify-center rounded-xl text-center">
        <img src={Arrow} className={`absolute ${arrowStyle}`} alt="arrow" />
        <p className="text-2xl font-black lg:-rotate-90">{year}</p>
        <div
          className={`absolute h-[1rem] w-[1rem] rounded-full border-4 border-[#bdc5cc] bg-white ${circleStyle}`}
        ></div>
      </div>
    </div>
  );
}

function Item({ title }) {
  return (
    <div className="w-[13rem] p-4 text-center lg:-rotate-90">
      <h4 className="text-xl font-black">{title}</h4>
      <div className="py-2">
        <p className="text-lg">Lorem ipsum</p>
        <p className="text-lg">Rerum, nisi!</p>
        <p className="text-lg">adipisicing elit.</p>
      </div>
    </div>
  );
}

export default TimeLine;
