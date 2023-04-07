import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import './proff.css';
import "../constants/images"
import images from '../constants/images';

import { useNavigate } from 'react-router-dom';

import MotionWrap from '../MotionWrap/MotionWrap';
import Navbar from '../components/NavBar/Navbar';

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
  
      return unsubscribe;
    }, []);
  
    const handleLogout = () => {
      auth.signOut().then(() => {
        console.log('User logged out successfully.');
        navigate('/', { replace: true });
      }).catch((error) => {
        console.log(error);
      });
    };
  
    return (
      <MotionWrap>
         <Navbar profileUrl="/profile" newQuotesUrl="/newquotes" />
        <div className="profile-container">
          {currentUser && (
            <div className="user-details">
              <h2>Name: {currentUser.displayName}</h2>
              <p>Email: {currentUser.email}</p>
              <img className='profs' src={images.userp} alt="Profile" />
            </div>
          )}
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </MotionWrap>
    );
};

export default Profile;


