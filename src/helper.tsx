import CryptoJS from "crypto-js";

type DecryptResult = any;

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const decrypt = (
  encryptedData: string,
  iv: string,
  key: string
): DecryptResult => {
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Hex.parse(encryptedData),
  });

  // Perform decryption
  const decrypted = CryptoJS.AES.decrypt(
    cipherParams,
    CryptoJS.enc.Hex.parse(key),
    {
      iv: CryptoJS.enc.Hex.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decryptedString);
};

export default decrypt;
