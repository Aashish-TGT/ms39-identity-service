import express from 'express';
import cors from 'cors'; // ✨ Add this
import db from './db.js';
import identityRoutes from './routes/identity.routes.js';

const app = express();
app.use(cors()); // ✨ Enable CORS for frontend/Postman access
app.use(express.json());
app.use('/api', identityRoutes);

db.sequelize.sync().then(() => {
  console.log("✅ DB synced");
  app.listen(5000, () => console.log("🚀 MS39 running on port 5000"));
});
