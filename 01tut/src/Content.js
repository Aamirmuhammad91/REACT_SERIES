import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const name = ['Aamir', 'Asif', 'kashif'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  };
  const handleClick = () => {
    console.log('you clicked it');
  };

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };

  const handleClick3 = (a) => {
    console.log(a.target.innerHTML);
  };
  return (
    <main>
      <p>my name is {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2('Dave')}>Click it</button>
      <button onClick={(a) => handleClick3(a)}>Click it</button>
    </main>
  );
};

export default Content;
