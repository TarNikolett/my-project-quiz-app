import './FirstPage.css';
import {useState} from 'react';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage.js';

export default function FirstPage(){
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  function handleOnClick (){
   setShowLoginPage(true);
  };
  function handleRegisterOnClick (){
    setShowRegisterPage(true);
   };

  return (
    <>
    <div>
      {!showLoginPage && !showRegisterPage &&
      <div className="container">
      <h1>Legyen Ön is milliomos!</h1>
      <button onClick={handleOnClick}>Bejelentkezés</button>
      <a onClick={handleRegisterOnClick}>Nincs még fiókod? Regisztrálj!</a>
      </div>
      }
    </div>

    <div>
      {showLoginPage && <LoginPage />}
    </div>

    <div>
      {showRegisterPage && <RegisterPage />}
    </div>

    </>
  )
}