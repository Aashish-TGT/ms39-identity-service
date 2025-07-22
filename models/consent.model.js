export default (sequelize, DataTypes) => {
  return sequelize.define('Consent', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    receiptId: { type: DataTypes.STRING },
    identityValue: { type: DataTypes.STRING },
    purpose: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
};
