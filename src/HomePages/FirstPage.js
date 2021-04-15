import './FirstPage.css';
import auth, {provider} from '../Firebase/auth.js';
import { useState } from 'react';

import Game from '../GamePages/GamePage.js';

export default function FirstPage(props){
  const [user, setUser] = useState(null);

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
      {user && <Game user={user.displayName}/>}
    </div>
    </>
  )
}