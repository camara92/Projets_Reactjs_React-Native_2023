import React from 'react'

export default function Navbar() {
  return (
    <div>
       <header>
    <nav className="navbar navbar-dark fixed-top bg-header navbar-expand-md">
      <div className="container">
        <a className="navbar-brand mr-4" href="">
        Daouda 
        </a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynav">
          <div className="navbar-nav mr-auto ">
            <a className="navbar-item nav-link" href="">Home </a>
            <a className="navbar-item nav-link" href="">Mes services  </a>
        </div>
          <div>
            <div className="navbar-nav me-2">
              <a className="navbar-item nav-link" href="">Connexion </a>
              <a className="navbar-item nav-link" href="">Inscription </a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </header>
  </div>
  )
}

