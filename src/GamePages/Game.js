import { useState } from 'react';
import './Game.css';

export default function Game (props){
  const questions = props.questions;

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(questions[0].correct_answer);

  const answers = [];

  function createAnswers (){
    answers.push(questions[index].correct_answer);
    questions[index].incorrect_answers.map((element) => answers.push(element));
  };
  createAnswers();
  
  function handleNextButtonOnClick (){
    setIndex(index + 1);
    setCorrectAnswer(questions[index + 1].correct_answer);
  };

  let answer = answers.map((element, index) => (
    <button 
      key={index} 
      onClick={ () => {
        if(element === correctAnswer){
          setScore(score + 1)}
        }
      }
      className={correctAnswer === element ? 'answers-button correct' : 'answers-button wrong'}
    >{element}</button>
  ))
  
  return (
    <>
      <div className="container">
        <div className='header-div'>
        <div>Questions: {index + 1}/20</div>
        <div>Score: {score}</div>
        </div>
        <div className="question-div" dangerouslySetInnerHTML={{__html: questions[index].question}}/>
        <div className='answer-div'>
      {answer}
    </div>
        <div className="next-button-div">
          <button className="next-button" onClick={handleNextButtonOnClick}>Next</button>
        </div>
      </div>
    </>
  )
};