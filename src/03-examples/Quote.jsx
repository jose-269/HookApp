import { useLayoutEffect, useRef, useState } from "react";


export const Quote = ({ author, quote}) => {

  const pRef = useRef()
  const [boxSize, setboxSize] = useState({ width:0, height: 0});


  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setboxSize({width, height})

  }, [quote])

  return (
    <>

      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={ pRef }>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
    
  );
};
