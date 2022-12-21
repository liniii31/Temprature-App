import {useEffect, useState} from 'react';
import './App.css';

function App() {
  let [temp,setTemp]=useState(0);
  useEffect(function(){
    if(temp>-10 && temp<15){
      let circle = document.getElementsByClassName('circle')[0];
      circle.style.backgroundColor="rgb(53, 53, 230)";
    }else if(temp>=15 && temp<30){
      let circle = document.getElementsByClassName('circle')[0];
      circle.style.backgroundColor="antiquewhite";
    }else if(temp>=30 && temp<40){
      let circle = document.getElementsByClassName('circle')[0];
      circle.style.backgroundColor="orange";
    }else if(temp>=40){
      let circle = document.getElementsByClassName('circle')[0];
      circle.style.backgroundColor="red";
    }else if(temp<-10){
      let circle = document.getElementsByClassName('circle')[0];
      circle.style.backgroundColor="blue";
    }
  },[temp])
  function increase(){
    setTemp(temp+1);
  }
  function decrease(){
    setTemp(temp-1);
  }
  return (
    <div className="App">
      <div className="temp">
        <div className='circle-div'>
          <div className="circle">
            <h1>{temp}<sup>o</sup>C</h1>
          </div>
        </div>
        <div className='two-circle'>
          <div className='small-circle' onClick={increase}><h1>+</h1></div>
          <div className='small-circle' onClick={decrease}><h1>-</h1></div>
        </div>
      </div>
    </div>
  );
}

export default App;
