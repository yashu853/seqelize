const express = require('express');
const sequelize = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// ✅ Root Route
app.get('/', (req, res) => {
  res.send("🚀 Student API is running!");
});

// ✅ Student Routes
app.use('/students', studentRoutes);

// ✅ Sync Sequelize and Start Server
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
});
