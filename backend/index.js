import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/productRoute.js';

config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Ensure JSON parsing is set before routes
app.use('/products', productRouter);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((error) => console.log('❌ MongoDB Connection Error:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
