import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';
import { auth, googleProvider } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from './components/GoogleButton';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('註冊成功！');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error('註冊失敗：' + error.message);
      console.error('Registration error', error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Google 註冊成功！');
      setTimeout(() => {
        navigate('/mydropzone');
      }, 2000);
    } catch (error) {
      toast.error('Google 註冊失敗：' + error.message);
      console.error('Google registration error', error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.contentContainer}>
        <div style={styles.card}>
          <h2 style={styles.title}>創建帳戶</h2>
          <form onSubmit={handleRegister} style={styles.form}>
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
            <button type="submit" style={styles.button}>註冊</button>
          </form>
          <div style={styles.divider}>或</div>
          <GoogleButton onClick={handleGoogleRegister} text="使用 Google 帳戶註冊" />
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
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // 柔和的陰影
  },
  title: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#1d1d1f', // Apple風格的深色文字
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
    border: '1px solid #d2d2d7', // Apple風格的邊框顏色
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#0071e3', // Google藍色
    },
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0071e3', // Google藍色
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#0077ED', // 稍微深一點的藍色
    },
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

export default Register;