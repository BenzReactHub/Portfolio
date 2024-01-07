import React from 'react';
// import Card from './Card';

function CardsContainer({ title, children }) {
  return (
    <div className="rounded-[2rem] bg-[url('./assets/projects-bg.png')]">
      <div className="p-2 pt-[8rem]">
        <h3 className="text-center text-3xl font-black text-white lg:text-5xl">
          {title}
        </h3>
        <div className="grid grid-cols-[repeat(1,minmax(15rem,20rem))] justify-center gap-4 py-10 lg:grid-cols-[repeat(2,minmax(15rem,20rem))] xl:grid-cols-[repeat(3,minmax(15rem,20rem))]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
