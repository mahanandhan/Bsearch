import express from 'express';
import { connectDB } from './db/db.js';
import dotenv from 'dotenv';
import router from './router/data.router.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to the Bsearch backend server!');
})

app.use('/api/data', router);

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
})