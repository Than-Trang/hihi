import React, { useReducer, useState } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
import kiki from "./images/LG-EcomElite-png-1.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";
import Confetti2 from "./confetti/Confetti";
import Confetti3 from "./confetti/Confetti";
import sound from "./amthanh/amthanh.mp3";
import useSound from "use-sound";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};
export default function GiftBoxAnimation() {
  const [isPlay, setIsPlay] = useState(true);
  const [playMp3, { stop }] = useSound(sound);
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;
    setIsPlay(!isPlay);
    Sound(isPlay);
    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }
  let Sound = (x) => {
    if (x) {
      playMp3();
    } else {
      stop();
      // console.log(123);
    }
  };

  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <Confetti2 className="haha" open={jump === "jump"} />
      <Confetti3 className="hihi" open={jump === "jump"} />
      <Confetti className="hehe" open={jump === "jump"} />
      <Confetti className="haihai" open={jump === "jump"} />
      <Confetti className="hh" open={jump === "jump"} />

      <div className="img-container">
        <p className={`kuku ${jump} kaka`}>Chào mừng ngày quốc tế nam giới</p>
        <img className={`kiki ${jump}`} src={kiki} alt="kiki" />
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
        <button className="box" onClick={() => animate()}>
          <img className="box_2" src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated} box`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
