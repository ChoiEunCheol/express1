const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // 정적 파일 제공을 위한 public 디렉토리 사용

// GET 요청을 처리 (입력 양식을 표시)
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

// POST 요청을 처리 (입력을 파일에 저장)
app.post('/save', (req, res) => {
  const inputData = req.body.inputData;
  
  // 입력값을 파일에 저장 (practice1.txt)
  fs.appendFile('practice1.txt', inputData + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('파일 저장 중 오류가 발생했습니다.');
    } else {
      res.send('입력한 내용을 성공적으로 저장했습니다.');
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
