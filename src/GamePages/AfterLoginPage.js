import { useState } from 'react';
import Game from './Game';

export default function AfterLoginPage (props){
  const [isClicked, setIsClicked] = useState(false);

  const questions = props.questions;

  function handleOnclick () {
    setIsClicked(true)
  };

  return (
    <>
    {!isClicked ? <div className="container">
      <h1>Üdvözöllek a játékban {props.user}!</h1>
      <button onClick={handleOnclick} className="start-btn">Start</button>
      </div> : null}

    {isClicked ? <Game questions={questions}/> : null}
    </>
  )
};