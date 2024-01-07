import React from 'react';
import { useEffect, useState } from 'react';

function Item({ positionX, positionY, radius, isToggle, children }) {
  const defaultStyle = `absolute flex items-center justify-center h-[${radius}rem] w-[${radius}rem] bg-primary rounded-full shadow-xl transition-all duration-700 ease-in-out`;
  if (isToggle)
    return (
      <li
        className={`${defaultStyle} translate-x-[${positionX}rem] translate-y-[${positionY}rem] opacity-100`}
      >
        {children}
      </li>
    );
  return <li className={`${defaultStyle} opacity-0`}>{children}</li>;
}

function Circular({ title }) {
  const [isToggle, setIsToggle] = useState(false);
  const [isStopTimer, setIsStopTimer] = useState(false);
  const baseRadius = 5;
  const cos60X = Math.round(baseRadius * Math.sqrt(3) * 0.75 * 100) / 100;
  const cos60Y = baseRadius * 0.75;
  const straight = baseRadius * 1.5;

  useEffect(() => {
    const tick = () => {
      setIsToggle((toggle) => !toggle);
    };
    if (!isStopTimer) tick();
    const timer = setInterval(tick, 5000);
    if (isStopTimer) clearInterval(timer);

    return () => clearInterval(timer);
  }, [isStopTimer]);

  const circlesEl = Array.from({ length: 6 }, (_, i) => i).map((idx) => {
    let positionX;
    let positionY;
    switch (idx + 1) {
      case 1:
        positionX = 0;
        positionY = -straight;
        break;
      case 2:
        positionX = cos60X;
        positionY = -cos60Y;
        break;
      case 3:
        positionX = cos60X;
        positionY = cos60Y;
        break;
      case 4:
        positionX = 0;
        positionY = straight;
        break;
      case 5:
        positionX = -cos60X;
        positionY = cos60Y;
        break;
      case 6:
        positionX = -cos60X;
        positionY = -cos60Y;
        break;

      default:
        break;
    }
    return (
      <Item
        key={idx}
        radius={baseRadius}
        positionX={positionX}
        positionY={positionY}
        isToggle={isToggle}
      >
        <label htmlFor={`c${idx + 1}`} className="text-md font-black">
          Menu {idx + 1}
        </label>
      </Item>
    );
  });

  function handleToggle() {
    setIsToggle((toggle) => !toggle);
    setIsStopTimer(true);
  }
  return (
    <div className="sm:scale-110 md:scale-125">
      <h3 className="pb-32 text-center text-3xl font-black lg:text-5xl">
        {title}
      </h3>
      <div className="relative  h-[10rem]">
        <div className="absolute left-[50%] h-full -translate-x-[50%]">
          <ul className={`absolute left-[25%] top-[25%] z-40 list-none`}>
            {circlesEl}
          </ul>
          <button
            onClick={handleToggle}
            className={`relative z-40 h-[${baseRadius * 2}rem] w-[${
              baseRadius * 2
            }rem] bg-primary cursor-pointer rounded-full border-none text-white shadow-xl transition-all duration-700 ${
              isToggle ? 'rotate-[-360deg]' : ''
            }`}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Circular;
