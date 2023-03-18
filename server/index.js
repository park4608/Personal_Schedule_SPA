const express = require('express');
const app = express();
app.use(express.json());
let cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

const dayjs = require('dayjs');
const DATE_QUERY = dayjs().format('YY-MM-DD');

// const todo = mongoose.model(DATE_QUERY, { _id: Number, content: String, idx: String, isComplete: Boolean });
const todo = mongoose.model(DATE_QUERY, { content: String, idx: String, isComplete: Boolean });
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

//post는 글쓰기 등에 많이 쓰임
app.post('/todos', function (req, res) {
  res.send('전송완료');
  console.log('시작함');
  let id = 0;
  const query = { name: 'NumOfPost' };
  const data = { content: req.body.content, idx: req.body.idx };

  postCounter.findOne(query).then((e) => {
    id = e.totalPost + 1;

    if (data.content !== '' && data.content !== undefined) {
      // const toDos = new todo({ _id: id, ...data });
      const toDos = new todo({ ...data });

      toDos.save().then(() => {
        console.log('일정 저장 성공!!');
      });

      postCounter.findOneAndUpdate(query, { $set: { totalPost: id } }).exec();
    }
  });
  console.log('끝남');
});

app.get('/dailyTodo', function (req, res) {
  todo.find({}).then((e) => {
    res.send(e);
  });
});

app.delete('/list/:idx', function (req, res) {
  res.send('삭제완료');
  postCounter.findOne({ name: 'NumOfPost' }).then((e) => {
    let curCount = e.totalPost;
    postCounter
      .findOneAndUpdate(
        { name: 'NumOfPost' },
        {
          $set: {
            totalPost: curCount - 1,
          },
        }
      )
      .exec();
  });

  let targetIdx = req.params.idx;
  todo.deleteOne({ idx: targetIdx }).then(() => {
    console.log('delete success');
  });
});
