import React from "react"
import './main.scss';
import soundOne from "./vender/bad-joke-drums.wav"
import soundTwo from "./vender/drum-and-percussion.wav"
import soundThree from "./vender/drum-hit-with-eco.wav"
import soundFour from "./vender/drum-joke-accent.wav"
import soundFive from "./vender/hand-tribal-drum.wav"
import soundSix from "./vender/knocking-sub-bass.wav"
import soundSeven from "./vender/losing-drums.wav"
import soundEight from "./vender/toy-drums-and-bell-ding.wav"
import soundNine from "./vender/tribal-dry-drum.wav"
const App = () => {
  function play(str) {
    let audio = document.getElementById(str);
    audio.play()
  }
  window.document.onkeyup = function listener(event) {
      cleanSwitch(event.key.toUpperCase())

    }
    const cleanSwitch = (params) => {
      switch(params){
        case "Q": play("Q")
        displayItem("the Q one")
        break;
        case "W": play("W")
        displayItem("the W one")
        break;
        case "E": play("E")
        displayItem("the E one")
        break;
        case "A": play("A")
        displayItem("the A one")
        break;
        case "S": play("S")
        displayItem("the S one")
        break;
        case "D": play("D")
        displayItem("the D one")
        break;
        case "Z": play("Z")
        displayItem("the Z one")
        break;
        case "X": play("X")
        displayItem("the X one")
        break;
        case "C": play("C")
        displayItem("the C one")
        break;
      }
    }
    const displayItem = (item) => {
      document.getElementById('display').innerText = item
    }
  return (
    <div id="drum-machine" className="container">
      
      

        <button id="one" className="drum-pad" onClick={() => cleanSwitch("Q")}>
          Q
          <audio src={soundOne} className="clip" id="Q"></audio>
        </button>

        <button id="two" className="drum-pad" onClick={() => cleanSwitch("W")}>
          W
          <audio src={soundTwo} className="clip" id="W"></audio>
        </button>

        <button id="three" className="drum-pad" onClick={() => cleanSwitch("E")}>
          E
          <audio src={soundThree} className="clip" id="E"></audio>
        </button>

        <button id="four" className="drum-pad" onClick={() => cleanSwitch("A")}>
          A
          <audio src={soundFour} className="clip" id="A"></audio>
        </button>

        <button id="five" className="drum-pad" onClick={() => cleanSwitch("S")}>
          S
          <audio src={soundFive} className="clip" id="S"></audio>
        </button>

        <button id="six" className="drum-pad" onClick={() => cleanSwitch("D")}>
          D
          <audio src={soundSix} className="clip" id="D"></audio>
        </button>

        <button id="seven" className="drum-pad" onClick={() => cleanSwitch("Z")}>
          Z
          <audio src={soundSeven} className="clip" id="Z"></audio>
        </button>

        <button id="eight" className="drum-pad" onClick={() => cleanSwitch("X")}>
          X
          <audio src={soundEight} className="clip" id="X"></audio>
        </button>

        <button id="nine" className="drum-pad" onClick={() => cleanSwitch("C")}>
          C
          <audio src={soundNine} className="clip" id="C"></audio>
        </button>

      <div id="display">todo fix this</div>
    </div>
  )
}

export default App;
