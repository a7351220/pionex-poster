const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 提供靜態文件
app.use(express.static(__dirname));

// 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'poster.html'));
});

// 啟動服務器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 