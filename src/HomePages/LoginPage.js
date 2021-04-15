import InputField from "../InputField.js";

export default function LoginPage (props){
  return (
    <div>
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

        <button onClick={props.handleOnClick}>Vissza a főoldalra!</button>
      </form>
    </div>
  )
}