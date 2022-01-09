const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./routes');
const app = express();

const { sequelize } = require('./models');

const port = 4000;

sequelize.sync({ force: false }) // force: false 실행시마다 테이블을 새로 재생성할건가에 대한 옵션 true or false
  .then(() => {
    console.log('데이터베이스 연결 성공!');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use('/', router);

app.listen(port, () => {
  console.log(`express app start`);
});
