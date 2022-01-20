import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Aamir');
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ['Aamir', 'Asif', 'kashif'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <p>my name is {name}</p>
      <button onClick={handleNameChange}>Click it</button>

      <p>This is the counter {count}</p>
      <button onClick={handleCount}>Click it</button>
    </main>
  );
};

export default Content;
