import './App.css';
import Button from './components/Button';
import Counter1 from './components/Counter1';

function App(props) {
  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <div className='counter-1'>
        <Button />
      </div>
      <div className='counter-2'>
        <Counter1 />

      </div>
    </div>
  );
}

export default App;
