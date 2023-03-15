const express = require('express');
const app = express();
app.use(express.json());
let cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

const todo = mongoose.model('Todo', { _id: Number, date: String, content: String });
const postCounter = mongoose.model('PostCounter', { totalPost: Number, name: String });

mongoose
  .connect('mongodb+srv://admin:1234@cluster0.jtytgl8.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'todoapp',
  })
  .then(() => {
    app.listen(8080, function () {
      console.log('listening on 8080');
    });
  })

  .catch((err) => {
    console.log(err);
  });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html');
});

app.get('/list', function (req, res) {
  // todo.find({ content: '111' }, function (err, res) {
  //   console.log(res);
  // });
  postCounter.findOne({ name: 'NumOfPost' }, function (err, res) {
    console.log(res[0].totalPost);
  });

  res.sendFile(__dirname + '/list.html');
});

//post는 글쓰기 등에 많이 쓰임
app.post('/formPage', function (req, res) {
  res.send('전송완료');
  // res.send(req.body.contents);
  let id = 0;
  const query = { name: 'NumOfPost' };
  const data = { date: req.body.date, content: req.body.contents };

  postCounter.findOne(query, function (req, res) {
    id = res.totalPost + 1;

    if (data.content !== '' && data.content !== undefined) {
      const toDos = new todo({ _id: id, ...data });

      toDos.save().then(() => {
        console.log('일정 저장 성공!!');
      });

      postCounter.findOneAndUpdate(query, { $set: { totalPost: id } }).exec();
    }
  });
});
