import React, { useState } from "react";
import Home from "./Home";

function Handlelog() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Home isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
    </div>
  );
}

export default Handlelog;
