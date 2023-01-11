import React, { useState } from "react";

export default function Welcome(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="">
      <h1>Welcome page</h1>
      <input onChange={(e) => setUserName(e.target.value)}
      type="text"
      placeholder="Username"
      />

      <input onChange={(e) => setPassword(e.target.value)}
      type="text"
      name=""
      id=""
      placeholder="password"
      />
      <button onClick={() => setLogin(  userName, password)}>Login</button>
    </div>
  );
}
