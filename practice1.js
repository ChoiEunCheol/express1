const express = require('express');
const app = express();
const port = 3000;

// GET 요청을 처리
app.get('/', (req, res) => {
  // 웃는 표정 이모지를 반환
  res.send('😄');
});

// 서버를 3000번 포트에서 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});