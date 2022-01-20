import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = ['Aamir', 'Asif', 'kashif'];
  const handleNameChange = () => {
    const int = Math.floor(Math.random() * 3);
    return name[int];
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>my name is {handleNameChange()}</p>
      </header>
    </div>
  );
};

export default App;
