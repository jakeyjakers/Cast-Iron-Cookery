import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import DutchOven from '../StockPhotos/dutchoven.png'
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="header">
      <div className="header__logo">
        <h3>Cast Iron Cookery</h3>
        <img src={DutchOven}/>
      </div>
      <a name='top'></a>
      <nav className="header__nav">
        {authCtx.token ? (
          <span>
            <Link className='header__nav__link'to="/">Home</Link>
            <Link className='header__nav__link'to="profile">Profile</Link>
            <Link className='header__nav__link'to="newrecipe">Submit Recipe</Link>
            <Link className='header__nav__link'to="login">Sign Up</Link>
          </span>
        ) : (
          <Fragment>
            <Link className='header__nav__link'to="/">Home</Link>
            <Link className='header__nav__link'to="login">Sign Up</Link>
          </Fragment>
        )}
        {/* <Link to='/'>Home</Link>  
          <Link to='profile'>Profile</Link>
          <Link to='newrecipe'>Submit Recipe</Link>
          <Link to='login'>Sign Up</Link> */}
      </nav>
    </div>
  );
};

export default Header;
