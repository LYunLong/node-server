const express = require('express')
const app = express()

app.use(express.static('./dist'))

app.listen(9009, ()=>{
    console.info('服务器启动')
})