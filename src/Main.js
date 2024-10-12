import React, { useContext, useEffect, useState } from 'react';
import MyDropzone from './MyDropzone';
import { AuthContext, useAuth } from './AuthContext';

function Main() {
  const user = useAuth(ctx => ctx.user);

  useEffect(() => {
    console.log(`In useEffect. User:`, user);
  }, [user]);

  return (
    <main className="main">
      <div className="hero">
        {user ? (
          <MyDropzone />
        ) : (
          <h1>Please log in to access the app</h1>
        )}
      </div>
    </main>
  );
}

export default Main;