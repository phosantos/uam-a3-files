require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const postRoutes = require('./routes/postRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./services/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoutes);
app.use('/newsletter', newsletterRoutes);
app.use('/login', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server iniciado na porta ${process.env.PORT}`);
});
