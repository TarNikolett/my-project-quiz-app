import { useState } from "react";

import FirstPage from "../FirstPage";
import InputField from "../../InputField.js";

export default function LoginPage (){
  const [showMainPage, setShowMainPage] = useState(false);

  function handleOnClick (){
    setShowMainPage(true);
  };

  return (
    <>
      <div>
        {!showMainPage &&
        <form  className="container">

          <label htmlFor="email">E-mail</label>
          <InputField
            id="email"
            type="text"
          />
     
          <label htmlFor="password">Jelszó</label>
          <InputField
            id="password"
            type="password"
          />

          <button>Bejelentkezés Google fiókkal!</button>
          <button onClick={handleOnClick}>Vissza a főoldalra!</button>
        </form>
        }
      </div>

      <div>
        {showMainPage && <FirstPage />}
      </div>
      
    </>
  )
}