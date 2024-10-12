import CryptoJS from 'crypto-js';

export const generateSign = (data, secretKey) => {
  // 實現你的簽名生成邏輯
};

export const uuidV4 = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};