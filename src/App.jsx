import React, { useState } from 'react'
import './App.css'
import { Button, Container, Stack } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
export default function App() {
  // let [btn1, setBtn1] = useState(false);
  // let [btn2, setBtn2] = useState(true);
  let [btn1, setBtn1] = useState('On');
  let [btn2, setBtn2] = useState('Off');
  let [handleColor, setHandleColor] = useState({backgroundColor: "black"});

  let color = document.getElementById('screen');
  const light = () => { color.style.backgroundColor = 'orange' };
  const dark = () => { color.style.backgroundColor = 'black' };

  const toggle1 = () => {
    if (btn1 === 'On') {

      setBtn1('Off');
      light();
    } else {
      setBtn1('On');
      dark();
    }
  }

  const toggle2 = () => {
    if (btn2 === 'Off') {
    
      setBtn2('On');
      

    } else {
      setBtn2('Off');
      setHandleColor({backgroundColor: "blue"});

    }
  }

  return (
    <>
      
      <div className="container" id='one'   >
      <div className="screen1" id='screen' onChange={handleColor} > 
        <button id='btn1' onClick={toggle1}>
          {btn1}
        </button>

        <button id='btn2' onClick={toggle2}>
          {btn2}
        </button>
        </div>
      </div>

    </>
  )
}
























