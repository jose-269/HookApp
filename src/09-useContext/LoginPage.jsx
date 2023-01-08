import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setuser } = useContext(UserContext);
  console.log( user);
  return (
    <>
          <div>LoginPage</div>
          <pre>{JSON.stringify(user, null, 3)}</pre>
          
          <button onClick={() => setuser({
              id: 321,
              name: 'we',
              email: 'jojo@gm.com'
          })} className="btn btn-warning">Establecer Usuarioss</button>

    </>
  );
};
