
# noticeboard-server

# 제작 이유
모든 사이트의 기본 구성이라고 생각이 되는 로그인, 게시판을 만들어 실력 증진을 하고 싶었고 node.js, express,  Mysql, REST API를 학습 및 사용하고 싶었다.

# 사용 기술 
Hroku(웹호스팅), node.js, express, ClearDB(Mysql)


# 프로젝트 설명
notice-board-server는 notice-board의 로그인, 글 작성, 글 수정, 글 삭제 등을 해주는 웹서버다.

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111970686-e1f38c00-8b3e-11eb-9586-2fe59dea1a99.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111970371-8f19d480-8b3e-11eb-910b-95586ae2d82d.png" align="center" width="40%"></p>
<p align="center">/signup 에 get 요청이 오면 signup 데이터베이스의 데이터를 웹서버에 출력한다. /signup 에 post전송이 오면 SELECT으로 signup 데이터베이스를 선택하고 POST로 온 회원가입 정보를 데이터베이스에 INSERT한다. </p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111971316-8d044580-8b3f-11eb-92e3-c159f6837069.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111971376-9e4d5200-8b3f-11eb-85a5-969e18945f1e.png" align="center" width="40%"></p>
<p align="center">/written 에 get 요청이 오면 written 데이터베이스의 데이터를 웹서버에 출력한다. /written 에 post 전송으로 작성한 글의 객체가 오면 그 정보들을 데이터베이스에 저장한다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111971764-0734ca00-8b40-11eb-879e-9f16d2b4e332.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/111972209-8d511080-8b40-11eb-8067-f7edf256f03f.png" align="center" width="42%"></p>
<p align="center">/written/update 에 POST 전송이 오면 닉네임, 제목, 날짜, 글 내용을 확인하고 새로 추가된 제목, 타이틀을 업데이트 해서 데이터베이스에 넣어준다.
/written/delete 에 POST 전송이 오면 닉네임, 제목, 날짜, 글 내용을 확인하고 데이터베이스에서 글을 삭제한다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111973710-20d71100-8b42-11eb-9167-a733aad0f08a.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111973836-406e3980-8b42-11eb-8ece-3b5afbdefe96.png" align="center" width="40%"></p>
<p align="center"> "/signup/email=:email" , "/signup/nickname=:nickname" 주소에 :email, :nickname에 웹사이트에서 이메일과 닉네임을 넣어서 웹서버에 요청하면 그 이메일과 닉네임에 해당하는 회원 정보를 쉽게 조회 할 수 있다. 웹사이트에서는 조회해서 중복 회원을 확인하고 방지한다.</p>

웹서버 사이트 : https://noticeboardserverr.herokuapp.com
