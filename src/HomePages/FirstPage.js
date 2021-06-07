import './FirstPage.css';
import auth, {provider} from '../Firebase/auth.js';
import { useState } from 'react';

import AfterLoginPage from '../GamePages/AfterLoginPage.js';

export default function FirstPage(props){
  const [user, setUser] = useState(null);
  const questions = props.questions;

  function handleLoginWithGoogle (){
    auth()
    .signInWithPopup(provider)
    .then((result) => setUser(result.user))
    .catch((error) =>{console.log(error)})
  };

  return (
    <>
    <div>
      {!user &&
      <div className="container">
        <h1>Legyen Ön is milliomos!</h1>
        <button onClick={props.LoginOnClick}>Bejelentkezés e-mail címmel</button>
        <button onClick={handleLoginWithGoogle}>Bejelentkezés Google fiókkal</button>
        <a onClick={props.RegisterOnClick}>Nincs még fiókod? Regisztrálj!</a>
      </div>
      }
    </div>

    <div>
      {user && <AfterLoginPage user={user.displayName} questions={questions}/>}
    </div>
    </>
  )
}