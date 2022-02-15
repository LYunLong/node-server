const express = require('express')
const app = express()

let router = express.Router();
let db = require('./db'); 

//插入测试
router.get('/dbtest',function(req, res){
    let project = {id: '2', name: '666'};
    let sqlString = 'INSERT INTO ttable SET ?';
    let connection = db.connection();
    db.insert(connection, sqlString, project, function(id){
        console.log('inserted id is:' + id);
    });
    db.close(connection);
    return;
});

app.use(express.static('./dist'))

app.listen(9009, ()=>{
    console.info('服务器启动')
})