import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //Memoriza FNs
    const incrementFather = useCallback(
      () => {
        // console.log('SeCounter couner +1')
        setCounter( (value) => value + 1 )
      },
      [],
    )
    useEffect(() => {
        incrementFather()
    }, [incrementFather])
    

    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }
  return (
    <>
        <h1>useCalback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={ incrementFather } />

    </>
  )
}
