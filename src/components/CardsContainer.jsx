/* eslint-disable react/prop-types */
import Card from './Card';

function CardsContainer({title}) {
  return (
    <div className="bg-[url('./assets/projects-bg.png')] rounded-[2rem]">
      <div className="pt-[8rem] p-2">
        <h3 className="text-center text-3xl lg:text-5xl font-black text-white">{title}</h3>
        <div className="py-10 grid gap-4 justify-center grid-cols-[repeat(1,minmax(15rem,20rem))] lg:grid-cols-[repeat(2,minmax(15rem,20rem))] xl:grid-cols-[repeat(3,minmax(15rem,20rem))]">
          <Card name="Project A001" />
          <Card name="Project A002" />
          <Card name="Project A003" />
          <Card name="Project A004" />
          <Card name="Project A005" />
          <Card name="Project A006" />
          <Card name="Project A007" />
          <Card name="Project A008" />
          <Card name="Project A009" />
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
