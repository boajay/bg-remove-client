export const commonStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f7', // Apple風格的背景色
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
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '12px',
    borderBottom: '1px solid #d2d2d7',
    fontSize: '16px',
    color: '#1d1d1f',
  },
  detailContainer: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
};