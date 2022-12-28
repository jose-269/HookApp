import { useCounter, useFetch  } from "../hooks";

import { Quote, LoadingQuote } from "../03-examples";

export const Layout = () => {
  
  const { counter, increment } = useCounter(1)
  

    const {  data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    
    // const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  // console.log({data, isLoading, hasError});
  // console.log(data);
  // const { author, quote } = !!data && data[0];


  
  return (
    <>
        <h1>MultipleCustomHooks</h1>
        <hr />

        {isLoading ? <LoadingQuote/> : <Quote author={author} quote={quote} />} 
          
        <button className="btn btn-primary" disabled={ isLoading } onClick={ () => increment() }>
          
          Next Quote
        </button>




    </>
  )
}
