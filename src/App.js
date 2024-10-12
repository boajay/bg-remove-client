import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import Login from './Login';
import Register from './Register';
import MyDropzone from './MyDropzone';
import Home from './Home';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mydropzone" element={<MyDropzone />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
