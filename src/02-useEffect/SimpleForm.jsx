import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Inix2',
    email: 'inix@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ( { target } ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });

  }

  useEffect(() => {
    // console.log('useEffect called');
  }, []);
  useEffect(() => {
    // console.log('formState Changed');
  }, [formState]);
  useEffect(() => {
    // console.log('email Changed');
  }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input onChange={ onInputChange } type="text" value={ username } className="form-control" placeholder="Username" name="username" />
        <input onChange={ onInputChange } type="email" value={ email } className="form-control mt-3" placeholder="jose@gmail.com" name="email" />

        {
         
        (username === 'Inix2') && <Message />
        }
    </>
  )
}
