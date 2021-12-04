import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';


export default function Navbar(props) {
    



    return (
      
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-2`}>
        <Link className="navbar-brand" to="/textforms">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-a" to="/textforms">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/about">{props.abouttext}</Link>
              </li>
            
            
            </ul>
          
          </div>
         
          {/* <button onClick={() => props.modeColor('green')} type="button" className="btn btn-outline-success">Success</button>
          <button onClick={() => props.modeColor('red')} type="button" className="btn btn-outline-danger mx-3">Danger</button>
          <button onClick={() => props.modeColor('yellow')} type="button" className="btn btn-outline-warning mx-2">Warning</button> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toogleMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable DarkMode" :"Enable LightMode"}</label>
          </div>
</nav>
    )
}


Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string
};

Navbar.defaultProps = {
    title:'Default Props Here',
    abouttext:'About Us'
  };
  


