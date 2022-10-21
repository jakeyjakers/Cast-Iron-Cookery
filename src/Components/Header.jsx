import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="header">
      <div className="header__logo">
        <h3>Cast Iron Cookery</h3>
        <img />
      </div>

      <nav className="header__nav">
        {authCtx.token ? (
          <Fragment>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="newrecipe">Submit Recipe</Link>
            <Link to="login">Sign Up</Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to="/">Home</Link>
            <Link to="login">Sign Up</Link>
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
