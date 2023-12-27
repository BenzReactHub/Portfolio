/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const slides = [1, 2, 3, 4, 5, 6];

function Slider({ title }) {
  const [currSlideNum, setCurrSlideNum] = useState(0);
  const [ isStopTimer, setIsStopTimer ] = useState(false);
  const maxSlide = slides.length;
  const slidesEl = slides.map((slide, idx) => (
    <div
      key={`${slide}-${idx}`}
      className={`slide translate-x-[${(idx - currSlideNum) * 100}%]`}
    >
      <div className="flex h-full items-center justify-center">
        <p className="text-center text-4xl font-black">{slide}</p>
      </div>
    </div>
  ));

  useEffect(() => {
    const tick = () => {
      setCurrSlideNum((cur) => {
        if (cur === maxSlide - 1) {
          return 0;
        }
        return cur + 1;
      });
    };
    if(!isStopTimer) tick();
    const interval = setInterval(tick, 5000);
    if(isStopTimer) clearInterval(interval);
    
    return () => clearInterval(interval);
  }, [maxSlide, isStopTimer]);

  function prevSlide() {
    if (currSlideNum === 0) {
      setCurrSlideNum(maxSlide - 1);
    } else {
      setCurrSlideNum((cur) => cur - 1);
    }
    setIsStopTimer(true);
  }

  function nextSlide() {
    if (currSlideNum === maxSlide - 1) {
      setCurrSlideNum(0);
    } else {
      setCurrSlideNum((cur) => cur + 1);
    }
    setIsStopTimer(true);
  }

  return (
    <div className="p-4">
      <div className="relative overflow-hidden sm:m-auto sm:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]">
        <h3 className="py-12 text-center text-3xl font-black lg:text-5xl">
          {title}
        </h3>
        <div className="h-[30rem]">{slidesEl}</div>
        <button onClick={prevSlide} className="slider-btn">
          &larr;
        </button>
        <button onClick={nextSlide} className="slider-btn right-0">
          &rarr;
        </button>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Slider;
