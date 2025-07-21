import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ProductRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', ProductRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
