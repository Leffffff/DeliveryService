import express from 'express';
import { clientRouter } from './routes/clientRouter';
import cors from 'cors';

const app = express();
// init db with fixtures
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Hi from /' });
});

app.use('/client', clientRouter);

app.listen(8080, () => console.log('Listen http://localhost:8080'));
