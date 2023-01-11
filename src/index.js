import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import './index.css';

import {BrowserRouter as Router} from 'react-router-dom';


import App  from './app.js';
import {StateProvider} from './context/stateProvider';
import {InitialState} from './context/initialState';
import reducer from './context/reducer';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
        <StateProvider initialState={InitialState} reducer={reducer}>
            <App/>
        </StateProvider>

        

    </Router>,
    </StrictMode>
    
    
  );