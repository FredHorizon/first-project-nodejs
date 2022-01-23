import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Teste ok 4' }));

app.listen(3333, () => {
  console.log('Server Started on port 3333.');
});
