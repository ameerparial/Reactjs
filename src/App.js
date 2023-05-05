import './App.css';
import MyButton from './Components/MyButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function increaseValue(){
    setCount(count+1);
  }
  function resetValue(){
    setCount(0);
  }
  function decreaseValue(){
    setCount(count-1);
  }
  return (
    <div className='App'>
      <MyButton count={count} increaseCount={increaseValue} resetCount={resetValue} decreaseCount={decreaseValue}/>
    </div>
  );
}

export default App;
