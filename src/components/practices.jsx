import { useState } from 'react'
import bulbOn from '../assets/images (5).jpeg'
import bulbOff from '../assets/images (4).jpeg'
import lightOn from '../assets/bulb-On.jpg'
import lightOff from '../assets/bulb-Off.jpg'
import '../App.css'

function App1() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="container1">
    <center>  <h2>💡  Switch Bulb Assignment</h2></center>

      <img
        src={isOn ? bulbOn : bulbOff}
        alt="bulb"
        className={isOn ? 'bulb on' : 'bulb'}
      />

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  )
}



function Bulb2() {
  const [light, setLight] = useState(false);
 
 
  return (
    <>
    <div className="container2">
      {
        <img className={light ? 'light on' : 'light'}
        style={{ width: '200px', height: '200px' }}
        src={light ? lightOn : lightOff}
        alt="light"
      />
      }
       <button onClick={() => setLight(true)}>Bulb ON</button>
       <button onClick={() => setLight(false)}>Bulb OFF</button>
      </div>
    </>
  )
}

export { App1, Bulb2}
