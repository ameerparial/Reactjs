import './App.css';
import MyButton from './Components/MyButton';
import ListItem from './Components/RenderList';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const list = [['Apple', 100], ['Banana', 130], ['Mango', 280], ['Pine Apple', 520], ['Orange', 200]];
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
    <>
      <h2>Task 1 Counter</h2>
      <div className='Buttons'>
        <MyButton count={count} increaseCount={increaseValue} resetCount={resetValue} decreaseCount={decreaseValue}/>
      </div>
      <hr></hr>
      <h2>Task 2 Render List</h2>
      <ListItem list={list}/>
    </>

  );
}

export default App;
