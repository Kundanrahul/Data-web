import React, { useEffect, useState } from "react";
import FileUpload from './FileUpload';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./profileview/Profile";
import NewQuotes from "./newquotes/NewQuotes";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new" element={<FileUpload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newquotes" element={<NewQuotes />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
