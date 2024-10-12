import React from 'react';

const GoogleButton = ({ onClick, text }) => (
  <button onClick={onClick} style={styles.googleButton}>
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google logo"
      style={styles.googleLogo}
    />
    <span style={styles.buttonText}>{text}</span>
  </button>
);

const styles = {
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 16px',
    width: '100%',
    border: '1px solid #dadce0',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    color: '#3c4043',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    ':hover': {
      backgroundColor: '#f7f8f8',
      boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
    },
  },
  googleLogo: {
    width: '18px',
    height: '18px',
    marginRight: '10px',
  },
  buttonText: {
    marginLeft: '10px',
  },
};

export default GoogleButton;