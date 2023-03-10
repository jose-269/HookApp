import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from './09-useContext/Router';

const router = Router();

// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWitchCustomHook } from './02-useEffect/FormWitchCustomHook';
// import { HooksApp } from './HooksApp';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-layoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
// import TodoApp from './08-useReducer/TodoApp';

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode> 
      <RouterProvider router={router} />
     </React.StrictMode> 
);
