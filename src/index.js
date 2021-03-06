import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function importBuildTarget() { 
  if (process.env.REACT_APP_BUILD_TARGET === "app") { 
    return import("./app.js"); 
  } else if (process.env.REACT_APP_BUILD_TARGET === "test") { 
    return import("./test.js"); 
  } else { 
    return import("./app.js"); 
  } 
} 

importBuildTarget().then(({ default: Environment }) => 
  ReactDOM.render( 
    <React.StrictMode> 
      <Environment /> 
    </React.StrictMode>
  , document.getElementById("root") 
  ) 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
