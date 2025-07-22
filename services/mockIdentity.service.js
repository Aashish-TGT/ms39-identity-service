export const validateIdentity = async (type, value) => {
  if (type === 'aadhaar' && /^\d{12}$/.test(value)) return true;
  if (type === 'upi' && value.includes('@')) return true;
  if (type === 'nfc' && value.startsWith('nfc_')) return true;
  if (type === 'eid' && value.startsWith('EU_')) return true;
  return false;
};
