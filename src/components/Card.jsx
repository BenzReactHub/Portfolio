/* eslint-disable react/prop-types */

function Card({ name }) {
  return (
    <div className="card">
      <h1 className="py-2 text-center text-[1.5rem] sm:text-[2rem]">{name}</h1>
      <hr />
      <p className="py-2 text-[1.25rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        nostrum iusto modi amet, nobis ex.
      </p>
    </div>
  );
}

export default Card;
