import cors from 'cors';
import express from 'express';
import { clientRouter } from './routes/clientRouter';
import { courierRouter } from './routes/courierRouter';
import { restaurantRouter } from './routes/restaurantRouter';

const app = express();
const port = 8080;

// init db with fixtures
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (request, response) => {
  response.end();
});

app.use('/clients', clientRouter);
app.use('/couriers', courierRouter);
app.use('/restaurants', restaurantRouter);

export const server = app.listen(port, () =>
  console.log(`Listen http://localhost:${port}`)
);
