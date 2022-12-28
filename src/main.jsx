import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWitchCustomHook } from './02-useEffect/FormWitchCustomHook';
// import { HooksApp } from './HooksApp';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-layoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />
    // <MultipleCustomHooks
    // />
  // </React.StrictMode>
)
