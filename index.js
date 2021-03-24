const express = require("express");  //express 서버 구성
const bodyParser = require('body-parser') // 바디펄스로 POST로 온 것을 확인
const server = express();
const http = require("http");
const PORT = process.env.PORT || 80;  //포트번호 저장
server.use(bodyParser.json());
const cors = require('cors');   


let signup1 =   //사용자 수가 들어가는 객체 선언
    [{
    }];

const corsOptions = {  //클라이언트가 cors문제 없이 들어 올 수 있게 권한을 줌
  origin: "https://bulletinboardsite.netlify.app",
  credentials: true
}
server.use(cors(corsOptions));

let mysql = require('mysql');  //ClearDB MYSQL 사용


let connection = mysql.createConnection({    //MYSQL CONNECTION
    host     : 'us-cdbr-east-03.cleardb.com',
    port     : '3306',
    user     : 'b4b1c76af6f030',
    password : '49d11fcb',
    database : 'heroku_780fd63b35029e5'
   });


setInterval(() => {   //MYSQL이 방치되면 꺼지는 것을 막기위해 주소를 계속 보내줌
    http.get("http://noticeboardserverr.herokuapp.com/signup");
    http.get("http://noticeboardserverr.herokuapp.com/written");
    connection.query('select 1 + 1', (err, rows) => { /* */ });
}, 3000);






server.listen(PORT);


