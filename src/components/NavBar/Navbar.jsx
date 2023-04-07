import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src="" alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        <div />
        <li className="app__flex p-text">
          <a className="arr" href="/">Home</a>
          <a className="arr" href={props.profileUrl}>Profile</a>
          <a className="arr" href={props.newQuotesUrl}>New Quotes</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
