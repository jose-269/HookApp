import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //Memoriza FNs
    const incrementFather = useCallback(
      (value) => {
        // console.log('SeCounter couner +1')
        setCounter( (c) => c + value )
      },
      [],
    )
    useEffect(() => {
        // incrementFather()
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
