// @flow 
import * as React from 'react';
import { navItems } from '../data';
import './Navbar.scss';
// type Props = {
    
// };
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/home">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
            {
                navItems.map(item => (
                    <li className="nav-item" key={item.name}>
                    <a className="nav-link" aria-current="page" href={item.path}>{item.name}</a>
                    </li>
                ))
            }
             
            </ul>
          </div>
        </div>
      </nav>
    );
};