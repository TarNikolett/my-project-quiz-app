import { useState } from "react"
import FirstPage from "../FirstPage/FirstPage";

export default function LoginPage (){

  const [showMainPage, setShowMainPage] = useState(false);

  function handleOnClick (){
    setShowMainPage(true);
  };

  return (
    <>
    <div>
    {!showMainPage &&
    <form>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="text"/>
      <label htmlFor="password">Jelszó</label>
      <input id="password" type="password"/>
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