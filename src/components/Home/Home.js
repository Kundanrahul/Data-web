import React from "react";
import { Link } from "react-router-dom";
import FileUpload from '../../FileUpload';

import "./home.css";
import MotionWrap from "../../MotionWrap/MotionWrap";
import images from "../../constants/images";


function Home(props) {
  return (
    <MotionWrap>
    <div className="allin">
      <div class="background-image"></div>
      <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="homeimg" src={images.lg} alt="logo" />
      </div>
      <ul className="app__navbar-links">
            <div />
            <li className="app__flex p-text">
            <a className="arr" href="">Home</a>
            <a  className="arr" href="/profile">Profile</a>
            <a  className="arr" href="/newquotes">new quotes</a>
          </li>
      </ul>
      </nav>
      <div className="cont">
        <h3>
          <Link className="ls" to="/login">LOGIN</Link>
        </h3>
        <h4 className="al">OR</h4>
        <h3>
          <Link className="ls" to="/signup">SIGNUP</Link>
        </h3>
      </div>

      <br />
      <br />
      <br />

      <h2 className="nn">
        {props.name ? (
          <React.Fragment className="rf">
            <h3>
            Welcome - {props.name}
            </h3>
            <FileUpload />
          </React.Fragment>
        ) : (
          "Login please"
        )}
      </h2>
    </div>
    </MotionWrap>
  );
}

export default Home;