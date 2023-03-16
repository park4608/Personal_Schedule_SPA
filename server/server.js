const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

let id = 12345;
const sample = [
  {
    id: 1234,
    name: 'samp',
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

// app.get('/api', (req, res) => res.json(sample));

app.post('/test', (req, res) => {
  const inputText = req.body.inText;
  console.log(inputText);
  const sendText = {
    text: '보내기 성공',
  };
  res.send(sendText);
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
