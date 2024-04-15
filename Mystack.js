import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";

function MyStack() {
  const [user, setUser] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    const interval = setInterval(() => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser !== user) {
        setUser(storedUser);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [user]);

  return <>{user ? "" : <Home />}</>;
}

export default MyStack;
