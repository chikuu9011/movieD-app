




















































































































import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Contexdata'

export default function App() {
  const [searchapp, setsearchapp] = useState()
  return (

    <div>
      <Context.Provider value={searchapp}>
        <Header aaa={setsearchapp} />
        <br />
        <Outlet />
        <Footer />
      </Context.Provider>
    </div>
  )
}
