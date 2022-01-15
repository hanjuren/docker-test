// const express = require('express');
// const nunjucks = require('nunjucks');
// const router = require('./routes');
// const app = express();
import express, { Request, Response } from 'express';
import { sequelize } from "./models";
import router from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routerSetting();
  }

  private expressSetting (): void {
    this.express.use(express.json());
  }
  private dataBaseConnect (): void {
    // sequelize.authenticate()
    //   .then(() => {
    //     console.log('데이터 베이스 연결 성공.');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  private routerSetting (): void {
    this.express.use(router);
  }
}
const app = new App().express;
// const { sequelize } = require('./models');
app.listen(4000, () => {
  console.log('서버 시작이요');
});
// sequelize.sync({ force: false }) // force: false 실행시마다 테이블을 새로 재생성할건가에 대한 옵션 true or false
//   .then(() => {
//     console.log('데이터베이스 연결 성공!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.set('view engine', 'html');
// nunjucks.configure('views', {
//   express: app,
//   watch: true,
// });
//
// app.use('/', router);

