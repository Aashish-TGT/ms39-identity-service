export default (sequelize, DataTypes) => {
  return sequelize.define('Identity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    receiptId: { type: DataTypes.STRING, allowNull: false },
    identityType: { type: DataTypes.STRING },
    identityValue: { type: DataTypes.STRING }
  });
};
