import './App.css';
import MyButton from './Components/MyButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function increaseValue(){
    if(count<50){
      setCount(count+1);     
    }
    else{
      alert('You have reached the maximum');
    }
  }
  function resetValue(){
    setCount(0);
  }
  function decreaseValue(){
    count>=1?setCount(count-1):alert('You reached the minimum');
  }
  return (
    <div className='App'>
      <MyButton count={count} increaseCount={increaseValue} resetCount={resetValue} decreaseCount={decreaseValue}/>
    </div>
  );
}

export default App;
