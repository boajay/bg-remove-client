import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { auth } from './firebase';
import { signOut } from "firebase/auth";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.content}>
        <Link to="/" style={styles.logo}>BgRmove</Link>
        <nav>
          {user ? (
            <>
              <span style={styles.welcome}>歡迎, {user.email}</span>
              <button onClick={handleLogout} style={styles.button}>登出</button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>登入</Link>
              <Link to="/register" style={styles.link}>註冊</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e0e0e0',
    padding: '10px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0071e3', // 更改為淺藍色
    textDecoration: 'none',
  },
  link: {
    color: '#0071e3', // 更改為淺藍色
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  welcome: {
    marginRight: '10px',
  },
};

export default Header;