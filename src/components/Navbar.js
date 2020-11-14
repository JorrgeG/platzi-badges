import React from 'react';
<<<<<<< HEAD

import '../styles/Navbar.css';
=======
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
<<<<<<< HEAD
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
=======
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
