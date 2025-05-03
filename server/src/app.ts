import express from 'express';
import cors from 'cors';
import listingsRoute from './routes/listing';

const app = express();
app.use(cors());
app.use('/api/listings', listingsRoute);
app.listen(3000, () => console.log('Backend running on http://localhost:3000'));
