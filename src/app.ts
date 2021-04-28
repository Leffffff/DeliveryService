import express from 'express';
import { clientRouter } from './routes/clientRouter';
import cors from 'cors';

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

export const server = app.listen(port, () =>
  console.log(`Listen http://localhost:${port}`)
);
