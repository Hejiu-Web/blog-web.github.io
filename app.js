// 回调函数
const serverHandler = (req, res) => {
    res.end('hello world!')
}

// 封装回调引用
module.exports = serverHandler;