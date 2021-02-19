import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pixelChange, setpixelChange] = useState(32);
  const [styleChange, setStyleChange] = useState(0);
  const [text , settext] = useState('Design Tool');

  var bg = "BackGround Color - ";
  var fs = "Font Style - ";


  function incPixelChangeHandler() {
    var finalPixelChange = pixelChange + 8;
    setpixelChange(finalPixelChange);
  }
  function decPixelChangeHandler() {
    var finalPixelChange = pixelChange - 8;
    setpixelChange(finalPixelChange);
  }
  function finalStyle() {
    if (styleChange === 1) {
      return {
        fontSize: pixelChange,
        backgroundColor: "#ee82ee",
        fontFamily: "Fredoka One, cursive"
      };
    }
    if (styleChange === 2) {
      return {
        fontSize: pixelChange,
        backgroundColor: "#70ed84",
        fontFamily: 'Lexend Mega, sans-serif'
      };
    }
    if (styleChange === 3) {
      return {
        fontSize: pixelChange,
        backgroundColor: "#41a3f2",
        fontFamily: 'Shadows Into Light, cursive'
      }
    }
    else{
      return{
        fontSize: pixelChange
      }
    }
  }
  function onChangeHandler (event){
settext(event.target.value)
  }

  function firstStyleHandler() {
    setStyleChange(1);
  }
  function secondStyleHandler() {
    setStyleChange(2);
  }
  function thirdStyleHandler() {
    setStyleChange(3);
  }

  return (
    <div className="App">
     Enter Text : 
      <input  onChange={onChangeHandler} ></input>
      {/* <input onChange={onChangeHandler}> Type here </input> */}
      <h1 style={finalStyle()}> {text} </h1>
      <p>
        <b>Defalut Font Size is 32px</b>
      </p>
      <button onClick={incPixelChangeHandler}>
        Increase Size by 8
      </button>
      <br />
      <button onClick={decPixelChangeHandler}>
        Decrease Size by 8
      </button>

      <p>
        {" "}
        <b>Change The Style </b>
      </p>

      <section className="styleSection">
        <div className="styleOne">
          <h2>Style 1 </h2>
          <p>
            {bg} <b id="bg-color"> Voilet</b> <br />
            {fs} <b id="font-style"> Reggae One</b>
          </p>
          <button onClick={firstStyleHandler}> Click Here for Style 1</button>
        </div>
        <div className="styleTwo">
          <h2>Style 2 </h2>

          <p>
            {bg} <b id="bg-color"> Green </b> <br />
            {fs} <b id="font-style">Lexend Mega</b>
          </p>
          <button onClick={secondStyleHandler}>Click Here for Style 2 </button>
        </div>
        <div className="styleThree">
          <h2>Style 3 </h2>

          <p>
            {bg} <b id="bg-color">Blue</b> <br />
            {fs} <b id="font-style">Shadows Into Light</b>
          </p>
          <button onClick={thirdStyleHandler}>Click Here for Style 3</button>
        </div>{" "}
      </section>
    </div>
  );
}
