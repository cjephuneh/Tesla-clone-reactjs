import React from 'react'

import logo from "./assets/tesla.svg";

const Header = () => {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <h5>Model S</h5>
          <h5>Model 3</h5>
          <h5>Model X</h5>
          <h5>Model Y</h5>
          <h5>Solar Roof</h5>
          <h5>Solar Panels</h5>
        </nav>
    </div>
  )
}

export default Header