import React, { useContext, useEffect, useState } from 'react';
import { commonStyles } from './styles/commonStyles';
import Header from './Header';
import MyDropzone from './MyDropzone';
import { AuthContext, useAuth } from './AuthContext';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);
  return <>
  
  {user ? (
    <MyDropzone />
  ):
  (
    <><div style={styles.container}>
                  <Header />
                  <main style={styles.main}>
                      <h1 style={styles.title}>歡迎來到 BgRmove</h1>
                      <p style={styles.subtitle}>能單個檔案或批量移除背景</p>
                      <Link to="#/register" style={styles.ctaButton}>立即注冊</Link>
                      <div style={styles.features}>
                          <div style={styles.feature}>
                              <h3 style={styles.featureTitle}>簡單易用</h3>
                              <p style={styles.featureDescription}>直觀的界面設計，讓你輕鬆上手</p>
                          </div>
                          <div style={styles.feature}>
                              <h3 style={styles.featureTitle}>安全可靠</h3>
                              <p style={styles.featureDescription}>所有上傅的圖片在完成操作後會立即刪除</p>
                          </div>
                          <div style={styles.feature}>
                              <h3 style={styles.featureTitle}>隨時隨地</h3>
                              <p style={styles.featureDescription}>跨平台支持，手機瀏覽器也可使用</p>
                          </div>
                      </div>
                  </main>
              </div><Footer /></>
  )
  
}
  </>
  
};

const styles = {
  container: {
    ...commonStyles.container,
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 'auto',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0071e3',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#1d1d1f',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1d1d1f',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#86868b',
    marginBottom: '40px',
    maxWidth: '600px',
  },
  ctaButton: {
    ...commonStyles.button,
    fontSize: '18px',
    padding: '15px 30px',
    marginBottom: '60px',
    textDecoration: 'none'
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1200px',
    width: '100%',
  },
  feature: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1d1d1f',
    marginBottom: '10px',
  },
  featureDescription: {
    fontSize: '16px',
    color: '#86868b',
  },
};

export default Home;