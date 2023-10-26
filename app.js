const express = require('express');
const app = express();
const port = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
  res.render('index');
});

// 서버를 3000번 포트에서 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
