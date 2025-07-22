import { Sequelize } from 'sequelize';
import IdentityModel from './models/identity.model.js';
import ConsentModel from './models/consent.model.js';

const sequelize = new Sequelize('ms39_db', 'root', '@A18tauru123', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Identity = IdentityModel(sequelize, Sequelize.DataTypes);
db.Consent = ConsentModel(sequelize, Sequelize.DataTypes);

// ✅ Default export db (used in app.js)
// ✅ Named exports Identity, Consent (used in controller)
export default db;
export const { Identity, Consent } = db;
