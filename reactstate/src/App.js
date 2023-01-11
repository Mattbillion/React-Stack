import './App.css';
import React, { useState } from 'react';
import Welcome from "./Comp/Welcome"
import Profile from "./Comp/Profile"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logoutHandler(){
    setIsLoggedIn(false)
  }

  function loginHandler(username, password) {
    console.log('username:', username);
    console.log('password:', password);
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
    } else {
      console.error("Error occured!");
    }
  }

  return (
   <div className="">
    <div className="App">
      {isLoggedIn ? <Profile setLogout={logoutHandler}/> : <Welcome setLogin={loginHandler}/> }
    </div>
   </div>
  );
}

export default App;
