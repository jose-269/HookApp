import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWitchCustomHook = () => {

  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })
  // const { username, email, password } = formState;
  // const onInputChange = ( { target } ) => {
  //   const { name, value } = target;
  //   setFormState({
  //     ...formState,
  //     [ name ]: value
  //   });
  // }

  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });
  // const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />

        <input onChange={ onInputChange } type="text" value={ username } className="form-control" placeholder="Username" name="username" />
        <input onChange={ onInputChange } type="email" value={ email } className="form-control mt-3" placeholder="email" name="email" />
        <input onChange={ onInputChange } type="password" value={ password } className="form-control mt-3" placeholder="password" name="password" />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        {
         
        // (username === 'Inix2') && <Message />
        }
    </>
  )
}
