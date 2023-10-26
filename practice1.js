const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 서비스: public 디렉토리의 파일들을 정적으로 제공
app.use(express.static('public'));

// 미들웨어: 요청과 응답의 중간에서 작업을 수행
app.use((req, res, next) => {
  console.log('미들웨어: 이 메시지가 모든 요청에 대해 로깅됩니다.');
  next();
});

// 라우팅: 특정 경로에 대한 요청을 처리
app.get('/', (req, res) => {
  res.send('홈 페이지'); // 홈 페이지 요청에 대한 응답
});

app.get('/about', (req, res) => {
  res.send('회사 정보 페이지'); // /about 경로 요청에 대한 응답
});

// 동적 라우팅: URL 매개변수 사용
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`사용자 ID: ${userId}`);
});

// POST 요청 처리
app.post('/submit', (req, res) => {
  const inputData = req.body.data;
  res.send(`POST 요청 받음: ${inputData}`);
});

// 오류 처리 미들웨어: 오류가 발생하면 다음 미들웨어로 이동
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('서버 오류 발생');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
