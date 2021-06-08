import { useState } from 'react';
import './Game.css';

export default function Game (props){
  const questions = props.questions;

  const [index, setIndex] = useState(0);

  function handleNextButtonOnClick (){
    setIndex(index + 1);
  };
  
  return (
    <>
      <div className="container">
        <div className="question-div" dangerouslySetInnerHTML={{__html: questions[index].question}}/>
        <div className="answer-div">
          <button className="answer-button">{questions[index].incorrect_answers[0]}</button>
          <button className="answer-button">{questions[index].incorrect_answers[1]}</button>
          <button className="answer-button">{questions[index].incorrect_answers[2]}</button>
          <button className="answer-button">{questions[index].correct_answer}</button>
        </div>
        <div className="next-button-div">
          <button className="next-button" onClick={handleNextButtonOnClick}>Next</button>
        </div>
      </div>
    </>
  )
};