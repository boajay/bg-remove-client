import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';
import { UserContext } from './UserContext';
import { auth, googleProvider } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from './components/GoogleButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      toast.success('登入成功！');
      setTimeout(() => {
        navigate('/mydropzone');
      }, 2000);
    } catch (error) {
      toast.error('登入失敗：' + error.message);
      console.error('Login error', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      toast.success('Google 登入成功！');
      setTimeout(() => {
        navigate('/mydropzone');
      }, 2000);
    } catch (error) {
      toast.error('Google 登入失敗：' + error.message);
      console.error('Google login error', error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.contentContainer}>
        <div style={styles.card}>
          <h2 style={styles.title}>登入帳戶</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="電子郵件"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>登入</button>
          </form>
          <div style={styles.divider}>或</div>
          <GoogleButton onClick={handleGoogleLogin} text="使用 Google 帳戶登入" />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f7',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#1d1d1f',
    marginBottom: '24px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '16px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d2d2d7',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0071e3',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  divider: {
    margin: '20px 0',
    textAlign: 'center',
    color: '#888',
  },
  googleButton: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d2d2d7',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Login;