import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWitchCustomHook } from './02-useEffect/FormWitchCustomHook';
// import { HooksApp } from './HooksApp';
import './index.css';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <MultipleCustomHooks
    />
  // </React.StrictMode>
)
