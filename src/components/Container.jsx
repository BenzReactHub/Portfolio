import React from 'react';

function Container({ children, styles, id }) {
  const defaultStyle =
    'w-full m-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%]';
  return (
    <div id={id} className={`${defaultStyle} ${styles}`}>
      {children}
    </div>
  );
}

export default Container;
