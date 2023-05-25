import React from "react";
import  ReactDOM  from "react-dom/client";

import {
    RouterProvider
  } from "react-router-dom";

import appRouting from "./Routing";
 //import './css/style.css';

 const root=ReactDOM.createRoot(document.getElementById('root'));
//console.log(root)
//root.render('hello')
 root.render(<RouterProvider router={appRouting}/>);