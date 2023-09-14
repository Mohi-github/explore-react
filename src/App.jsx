import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Temp from './Temp'
import Users from './Users'

function App() {
  



  const handleClick=()=>{
    alert('Clicked');
  }
  const add5=(num)=>{
     alert(num+5);
  }
  return (
    <>
          <Users></Users>
          <Counter></Counter>
     <Temp></Temp>
       <button onClick={handleClick}>click me</button>
       <button onClick={()=>{alert('second click')}}>click me</button>
       {/* <button onClick={add5(2)}>click me</button> ...this will call the func. immediately*/}
       <button onClick={()=>{add5(2)}}>add 5</button>
    </>
  )
}

export default App
