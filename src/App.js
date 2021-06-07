import {useState, useEffect} from 'react';

import FirstPage from './HomePages/FirstPage.js';
import LoginPage from './HomePages/LoginPage.js';
import RegisterPage from './HomePages/RegisterPage.js';

export default function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() =>{
    fetch('https://opentdb.com/api.php?amount=20')
    .then((res) => res.json())
    .then((data) =>setQuestions(data.results))
    .catch((err) => {console.log(err.message)});
  }, []);

  function handleOnClick (){
    setShowLoginPage(false);
    setShowRegisterPage(false);
  };

  function handleLoginOnClick (){
    setShowLoginPage(true);
  };
 
  function handleRegisterOnClick (){
    setShowRegisterPage(true);
  };
 
  return (
    <div>
      <div>
        {!showLoginPage && !showRegisterPage &&
          <FirstPage LoginOnClick={handleLoginOnClick} RegisterOnClick={handleRegisterOnClick} questions={questions}/>
        }
      </div>

      <div>
        {showLoginPage && !showRegisterPage &&
          <LoginPage handleOnClick={handleOnClick} />
        }
      </div>

      <div>
        {showRegisterPage && !showLoginPage &&
          <RegisterPage handleOnClick={handleOnClick}/>
        }
      </div>
    </div>
  );
}