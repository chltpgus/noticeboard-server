const express = require("express");  //express 서버 구성
const bodyParser = require('body-parser') // 바디펄스로 POST로 온 것을 확인
const server = express();
const http = require("http");
const PORT = process.env.PORT || 80;  //포트번호 저장
server.use(bodyParser.json());
const cors = require('cors');   

let id = 1, name = "user number", num = 3;  //MYSQL UPDATE에 들어가는 변수들 선언

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

   //테이블 생성
/*
   connection.connect(function(err){
       if(err)throw err;
       let sql = ("CREATE TABLE Written(id INT AUTO_INCREMENT PRIMARY KEY, nickname varchar(20), title varchar(40), date varchar(20), maintext varchar(150))");//글자수 제한은 한글 75자
       connection.query(sql, function(err, res){
           if(err)throw err;
           console.log("table created");
       });
   });
*/
//AUTO_INCREMENT초기화
/*
connection.connect(function(err){
    if(err)throw err;
    let sql = ("ALTER TABLE signup AUTO_INCREMENT=0");//id, email, password, nickname
    connection.query(sql, function(err, res){
        if(err)throw err;
        console.log("1 entry added");
    });
});
*/

//인설트
/*
connection.connect(function(err){
    if(err)throw err;
    let sql = ("INSERT into signup( email, password, nickname)values('rlatpgus@naver.com','tpgus12','hyeon')");//id, email, password, nickname
    connection.query(sql, function(err, res){
        if(err)throw err;
        console.log("1 entry added");
    });
});
*/


/* //테이블 제거
connection.connect(function(err){
    if(err)throw err;
    let sql = ("DROP table signup");//id, email, password, nickname
    connection.query(sql, function(err, res){
        if(err)throw err;
        console.log("1 entry added");
    });
});
*/
setInterval(() => {   //MYSQL이 방치되면 꺼지는 것을 막기위해 주소를 계속 보내줌
    http.get("http://noticeboard--server.herokuapp.com/signup");
    http.get("http://noticeboard--server.herokuapp.com");
    connection.query('select 1 + 1', (err, rows) => { /* */ });
}, 3000);



server.get("/signup/email=:email", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) { 

        const email = row.find((e)=> {
            return e.email === req.params.email;
        });
        if(email){
            res.json(email);  // 서버에 json으로 보내기
        }else{
            res.json({email: "Email was not found"});
        }

    });
 
});

server.get("/signup/password=:password", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) { 

        const password = row.find((p)=> {
            return p.password === req.params.password;
        });
        if(password){
            res.json(password);  // 서버에 json으로 보내기
        }else{
            res.json({password: "Password was not found"});
        }

    });
 
});

server.get("/signup/nickname=:nickname", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) { 

        const nickname = row.find((n)=> {
            return n.nickname === req.params.nickname;
        });
        if(nickname){
            res.json(nickname);  // 서버에 json으로 보내기
        }else{
            res.json({nickname: "Nickname was not found"});
        }

    });
 
});

server.get("/signup", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) { 
        res.json(row);                                  
    });

    
});


server.post("/signup", (req, res) => { // post요청이 오면 

    connection.query("SELECT * FROM signup", function (err, row) {
        signup1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        console.log(signup1);
        let email01 = signup1.email, password01 = signup1.password, nickname01 = signup1.nickname;
        let sql = ("INSERT into signup( email, password, nickname)values('" + email01 + "','" + password01 + "','" + nickname01 + "')");//id, email, password, nickname
        
        if (email01 != undefined && password01 != undefined && nickname01 != undefined ) {
            connection.query(sql, function (err, res) {
                if (err) throw err;
                console.log("Insert add");
            });
        }
    });
});

server.get("/written", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) { 
        res.json(row);                                  
    });

});

server.get("/written/nickname=:nickname", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) { 

        const nickname = row.find((n)=> {
            return n.nickname === req.params.nickname;
        });
        if(nickname){
            res.json(nickname);  // 서버에 json으로 보내기
        }else{
            res.json({nickname: "Nickname was not found"});
        }
    });
 
});

server.post("/written", (req, res) => { // post요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        console.log(written1);
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext;
        let sql = ("INSERT into written( nickname, title, date, maintext)values('" + nickname01 + "','" + title01 + "','" + data01 + "','"+ maintext01 +"')");//id, email, password, nickname
        
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) {
            connection.query(sql, function (err, res) {
                
                if (err) throw err;
                console.log("Insert add");
            });
        }
    });
});

server.post("/written/delete", (req, res) => { // post요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        console.log(written1);
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext;
        let sql = ("DELETE from written where nickname = '" + nickname01 + "'and title = '" + title01 + "'and date = '" + data01 + "'and maintext = '"+ maintext01 +"'");//id, email, password, nickname
        
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) {
            connection.query(sql, function (err, res) {
                
                if (err) throw err;
                console.log("delete");
            });
        }
    });
});

server.post("/written/update", (req, res) => { // post요청이 오면 

    connection.query("SELECT * FROM written", function (err, row) {
        written1 = req.body;                             //POST로 전송된 jSON signup1에 저장
        res.json(row);                                  // 서버에 json으로 보내기 
        console.log(written1);
        let nickname01=written1.nickname, title01 = written1.title, data01 = written1.date,  maintext01 = written1.maintext, title02 = written1.title2, maintext02 = written1.maintext2;
        let sql = ("DELETE from written where nickname = '" + nickname01 + "'and title = '" + title01 + "'and date = '" + data01 + "'and maintext = '"+ maintext01 +"'");//id, email, password, nickname
        let UPDATE = "UPDATE written SET title = '" + title02 + "', maintext = '"+ maintext02 + "' WHERE nickname = '" + nickname01 + "'and title = '" + title01 + "'and date = '" + data01 + "'and maintext = '"+ maintext01 +"'"
        if (nickname01 != undefined && title01 != undefined && data01 != undefined && maintext01 != undefined) {
            connection.query(UPDATE, function (err, res) {
                
                if (err) throw err;
                console.log("update");
            });
        }
    });
});



/*
server.post("/api/user", (req, res) => { // post 요청이 오면

    connection.query("SELECT * FROM user", function (err, row) {

        user = row;
        users = req.body;
        res.json(user);                                  // 서버에 json으로 보내기
        console.log(row);
        num = users.num, id= users.id;
        let UPDATE = "UPDATE user SET num = '" + num + "'"+ " WHERE id ='" + id+"'";
    
        connection.query(UPDATE, function (err) {  //클라이언트한테 온 정보를 업데이트
            if (err) {
                return console.log(err.message);
            }
            console.log('UPDATE');
        
        
        });
    });
});
*/

server.listen(PORT);


/*
mysql://[user name]:[password]@[Host name]/[password2]?reconnect=true
mysql://b4b1c76af6f030:49d11fcb@us-cdbr-east-03.cleardb.com/heroku_780fd63b35029e5?reconnect=true
Name:	Heroku User
Username:	be9c4e9e6612a7
Password:	b0913718
Email Address:	chltpgusg@gmail.com
Phone Number:	1234567891
User ID:	AC2537203063D5ED2B53DF883B0A422C
*/

//Error: Connection lost: The server closed the connection.