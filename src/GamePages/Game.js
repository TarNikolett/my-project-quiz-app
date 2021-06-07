import './Game.css';

export default function Game (props){
  const questions = props.questions;
  let index= 0;
  
  return (
    <>
      <div className="game-container">
        <div className="question-div">{questions[index].question}</div>
        <div className="answer-div">
          <button className="answer-button">Answer 1</button>
          <button className="answer-button">Answer 2</button>
          <button className="answer-button">Answer 3</button>
          <button className="answer-button">Answer 4</button>
        </div>
        <div className="next-button-div">
          <button className="next-button">Next</button>
        </div>
      </div>
    </>
  )
};