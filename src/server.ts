import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/UserRoutes';
import { deviceRouter } from './routes/DeviceRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));
app.use(express.json());
app.use(userRoutes);
app.use(deviceRouter);
app.use(errorHandler);

app.listen((process.env.PORT || 80), () => {
    console.log(`Server running on port ${process.env.PORT || 80}`);
});
