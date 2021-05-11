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
  origin: "https://bulletinboardsite.netlify.app"|"https://localhost:3000",
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

server.get("/signup", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) { //signup 데이터베이스 SELECT
        res.json(row);    //        signup 정보를 서버에 전송                 
    });
    
});

server.get("/written", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) { //written 데이터베이스 SELECT
        res.json(row);                       //  서버에 값들을 전송한다.         
    });

});

server.get("/signup/email=:email", (req, res) => { // 회원 정보 email get 요청이 오면

    connection.query("SELECT * FROM signup", function (err, row) {  //데이터베이스 signup을 선택해서
        const email = row.find((e)=> {
            return e.email === req.params.email;
        });
        if(email){
            res.json(email);  // 이메일 값을 json으로 서버에 보낸다
        }else{
            res.json({email: "Email was not found"}); // 없으면 에러 값 출력
        }
    });
 
});
server.get("/signup/nickname=:nickname", (req, res) => { // 회원 정보 nickname get 요청이 오면

    connection.query("SELECT * FROM signup", function (err, row) { //데이터베이스 signup을 선택해서
        const nickname = row.find((n)=> {
            return n.nickname === req.params.nickname;
        });
        if(nickname){
            res.json(nickname);  // 닉네임 값을 json으로 서버에 보낸다
        }else{
            res.json({nickname: "Nickname was not found"}); // 없으면 에러 값 출력
        }

    });
 
});



server.post("/signup", (req, res) => { // post전송이 오면 

    connection.query("SELECT * FROM signup", function (err, row) {
        signup1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        let email01 = signup1.email, password01 = signup1.password, nickname01 = signup1.nickname;  //변수에 POST 전송으로 온 값을 저장
        let sql = ("INSERT into signup( email, password, nickname)values('" + email01 + "','" + password01 + "','" + nickname01 + "')");//id, email, password, nickname
        
        if (email01 != undefined && password01 != undefined && nickname01 != undefined ) { // 전송으로 온 값들이 빈 값이 아니면
            connection.query(sql, function (err, res) { // 값들을 데이터 베이스에 INSERT한다.
                if (err) throw err;
                console.log("Insert add");
            });
        }
    });
});

server.post("/written", (req, res) => { // post전송이 오면 

    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON written1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext;
        let sql = ("INSERT into written( nickname, title, date, maintext)values('" + nickname01 + "','" + title01 + "','" + data01 + "','"+ maintext01 +"')");//id, email, password, nickname
        // 닉네임, 제목, 날짜, 글 내용
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) { //전송으로 온 값들이 빈 값이 아니면
            connection.query(sql, function (err, res) { // 값들을 데이터베이스에 INSERT한다.
                if (err) throw err;
                console.log("Insert add");
            });
        }
    });
});


server.post("/written/delete", (req, res) => { // post 전송이 오면 
    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext;
        let sql = ("DELETE from written where nickname = '" + nickname01 + "'and title = '" + title01 + "'and date = '" + data01 + "'and maintext = '"+ maintext01 +"'");//id, email, password, nickname
        // 닉네임, 제목, 날짜, 글 내용을 탐색하여 삭제하는 sql문
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) { //값들이 빈 값이 아니라면
            connection.query(sql, function (err, res) { //데이터베이스에서 삭제
                if (err) throw err;
                console.log("delete");
            });
        }
    });
});

server.post("/written/update", (req, res) => { // post 전송이 오면 

    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext, title02 = written1.title2, maintext02 = written1.maintext2;
        let UPDATE = "UPDATE written SET title = '" + title02 + "', maintext = '"+ maintext02 + "' WHERE nickname = '" + nickname01 + "'and title = '" + title01 + "'and date = '" + data01 + "'and maintext = '"+ maintext01 +"'"
        // 새로운 제목, 새로운 글 내용을 닉네임, 제목, 날짜, 글 내용을 기준으로 탐색해서 제목, 글 내용을 업데이트
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) {// 값들이 빈 값이 아니라면
            connection.query(UPDATE, function (err, res) { //데이터베이스 업데이트
                if (err) throw err;
                console.log("update");
            });
        }
    });
});


server.listen(PORT);


