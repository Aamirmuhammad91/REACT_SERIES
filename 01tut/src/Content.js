import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const name = ['Aamir', 'Asif', 'kashif'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  };
  return (
    <main>
      <p>my name is {handleNameChange()}</p>
    </main>
  );
};

export default Content;
