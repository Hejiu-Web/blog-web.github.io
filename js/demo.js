// 创建服务器
const http = require('http');

// 引入文件  当然后缀js可以省略
// const serverHandler = require('../app.js');

// 创建端口
// const PORT = 5000;

// 添加服务器
const server = http.createServer((req, res) => {
    req.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world!');
});

// 监听服务器端口
server.listen(5000, () => {
    console.log('hello my PORT is 5000...')
})