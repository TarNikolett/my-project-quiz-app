import './FirstPage.css';

export default function FirstPage(props){
  return (
    <>
      <div className="container">
        <h1>Legyen Ön is milliomos!</h1>

        <button onClick={props.LoginOnClick}>Bejelentkezés e-mail címmel</button>

        <button>Bejelentkezés Google fiókkal</button>

        <a onClick={props.RegisterOnClick}>Nincs még fiókod? Regisztrálj!</a>
        
      </div>
    </>
  )
}