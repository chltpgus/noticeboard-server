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

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111971316-8d044580-8b3f-11eb-92e3-c159f6837069.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111971376-9e4d5200-8b3f-11eb-85a5-969e18945f1e.png" align="center" width="40%"></p>
<p align="center">/written 에 get 요청이 오면 written 데이터베이스의 데이터를 웹서버에 출력한다. /written 에 post 전송으로 작성한 글의 객체가 오면 그 정보들을 데이터베이스에 저장한다.</p>
