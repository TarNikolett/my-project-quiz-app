import InputField from"../InputField.js";

export default function RegisterPage (props){
  return (
    <div>
      <form className="container">
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

        <label htmlFor="password">Jelszó mégegyszer</label>
        <InputField
          id="password"
          type="password"
        />
  
        <button onClick={props.handleOnClick}>Vissza a főoldalra!</button>
      </form>
    </div>
  )
}