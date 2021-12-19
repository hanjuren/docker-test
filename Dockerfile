# 어떤 환경에서 실행 할지 명시한다. 수많은 버전이 있다.
FROM node:12

ARG PORT
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# . 은 현재 디렉토리의 모든것을 /usr/src/app으로 복사한다는 의미다.
COPY . /usr/src/app
RUN npm install

RUN npm install -g nodemon
# Bundle app source

EXPOSE $PORT

CMD ["nodemon", "-L", "app.js"]