# Study_NodeJS
Node.js를 이용하여 간단한 웹 서버를 구축해보자.

---
## 준비하기
이 프로젝트는 Node.js를 이용하여 작업되며,
더 나아가 PM2를 활용하여 웹 서버를 관리하고.
express, express-generator(+pug)를 사용합니다.

## Node.js
Node.js는 공식 홈페이지로 가면 바로 설치 할 수 있다!

설치가 잘 됐는지 확인하려면
cmd 창에
```cmd
node -v
```
입력하면 설치한 버전이 정상적으로 뜨면 완료!

---
## PM2
PM2를 이용해 서버를 관리해보자!

### 설치
npm install pm2 -g

### 명령어
```bash
$ pm2 start filename # pm2로 프로그램 실행
$ pm2 start filename [--watch] # 파일의 변경을 항상 감지, 재시작 및 반영
$ pm2 start filename [--watch] [--no-deamon] # 파일의 변경을 항상 감지, 재시작 및 반영 + 사용자에게 로그 표시
$ pm2 start filename [--watch] [--ignore-watch="data/*"] [--no-daemon]
# 파일의 변경을 항상 감지, 재시작 및 반영 + 사용자에게 로그 표시 + data directory내 변경사항 무시

$ pm2 list # 현재 실행중인 파일 목록

$ pm2 stop [filename] # 실행중인 프로세스 종료

$ pm2 kill # pm2로 실행한 모든 프로세스를 중지&삭제

$ pm2 monit # 현재 pm2로 관리 중인 프로세스의 목록 및 정보 표시
$ pm2 log # 변경 사항 및 상태 로그 표시 (--watch 옵션으로 프로그램을 실행한 경우 터미널로 오류목록을 볼 수 없는데, log를 이용해 볼 수 있다.)
```

---

## html
html 활용할 문법들을 적어보자

### Form
url로 정보를 보낼 때 사용할 수 있다.
기본적으로 <form> 태그 안에 <input> 태그를 넣어준다.
```html
<form action="경로명" method="post">
    <input type="text" name="이름" placeholder="텍스트">
    <input type="submit">
    <textarea name="이름">
</form>
```

form 속성
action : 실행할(이동할) url
method : 전송할 방식. 이때 post형식으로 해야 담고 있는 정보들을 숨겨서 보낼 수 있다.

input 속성
type : 형식
name : input의 이름. 전송 받은 데이터를 이 name 속성을 이용해 찾을 수 있다. 보낼 데이터가 있다면 꼭 써줘야 한다.
placeholder : 기본으로 표시할 가이드 텍스트

===


# study_express
node.js - express 를 활용한 웹 페이지

---

## 실습준비
pm2를 이용해 서버를 시작하기 전에 package.json에 적힌 모듈들을 설치해야 한다.
```bash
$ npm stall # package.json에 적힌 파일을 설치해야한다.
```
터미널에 위와 같이 설치하면 **node_modules** directory가 생성된다.

그럼 이제 다시 터미널에

```bash
$ pm2 start main.js --watch # main.js를 process manager로 실행, 파일의 수정 감지 및 반영
```

---

## express
### 설치
터미널에 입력
```bash
$ npm install express --save # express 설치
```

## node.js 보안 모듈
### helmet
node.js에서 일어나는 보안 관련 이슈들을 "알아서" 처리해준다.
#### 설치
```bash
$ npm install helmet [--save]
```
#### 사용
```javascript
var helmet = require('helmet'); // security module
app.use(helmet()); // use the helmet module
```

### cookie
방문자 확인 및 인증에서 활용되는 정보. 안전하게 활용해야한다.

---

## javascript 

### sanitize-html
sanitize : 소독하다
html의 input 또는 textarea 또는 기타등등의 사용자 입력정보에 &lt;script&gt;CODE&lt;/script&gt; 이란 정보를 적으면 웹브라우저에서는 텍스트가 아닌 script 기술로 받아들여서 사용자가 이를 악용하여 악성스크립트를 집어넣을 수 있다.
이로인해 서버의 정보를 빼낼 수 있게 될수도 있다.
이것을 방어하기 위한 node의 패키지모듈로 &lt;script&gt;,&lt;a&gt; 등등 기타 태그들
변환시켜주어 **악성스크립트로 변질되는 것을 막아주는 보안 라이브러리**.

---

## express-generator
node.js의 express에서 제공하는 모범적인 framework이다. 기본적으로 필요한 초기 작업을 "알아서"해준다.

### 설치
```bash
$ npm install express-generator -g
```

설치 이후 명령어가 궁금하다면
```bash
$ express -h
```

### 구조
- bin (dir)
- public (dir) : store for save Static File
- routes (dir) : router (javascript file)
- views (dir) : code (pug:html)
- app.js : executing main file

### 실행
```bash
$ DEBUG=[Project.name]:& npm start # Mac
$ set DEBUG=[Project.name]:* & npm start # windows
```

---

## 앞으로 공부할만 한 것

### pug
: html을 더 짧게 작성할 수 있는 코드. (반복문 및 조건문 등 확장 된 기능 제공)
#### 설치
```bash
$ npm stall pug --save
```

### Database
: 현대 웹에서는 필수 요소.
#### MySQL
```bash
$ npm install mysql
```
#### MongoDB
```bash
$ npm install monodb
```

### Middleware
: express의 기능을 더욱 확장시킬 수 있는 좋은 방법. middleware를 잘 쓰면 그만큼 express를 잘 쓸 수 있다!

---

# cookie와 인증
쿠키를 이용하면 각 사용자를 식별/인증 할 수 있고, 사용자별로 다른 서비스를 제공 할 수 있다.

## cookie parser
```bash
npm install -s cookie # 미들웨어 설치
```
```javascript
var cookie = require('cookie'); // 미들웨어
```

## 쿠키 생성
```javascript
// 쿠키 생성
'Set-Cookie':'yummy_cookie=choco' // 쿠키 값이 하나일 경우
'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry'] // 복수일 때는 항상 배열의 형태

// 쿠키 분석
request.headers.cookie // 쿠키를 받는 경우. headers.cookie로 찾을 수 있다.

var cookies = {};
if(request.headers.cookie != undefined) {
    cookies = cookie.parse(request.headers.cookie);
}
console.log(cookies.yummy_cookie); // choco
console.log(cookies.tasty_cookie); // strawberry
```
## 더 공부할 만한 것

### Session
javascript를 활용해 얼마든지 쿠키를 가로챌 수 있다.
그래서 쿠키 내부에 중요한 정보(id, password, etc)를 보내는 것은 매우 위험하다.
따라서 session을 활용하여 (식별이 어려운, 암호화 된)값을 보내고 실제 데이터는 따로 인증하는 방법을 적용 할 수 있다.

### Local Database

### 웹 개인화
- 사용자 별 언어 설정
- 사용자 개인 설정 유지
- etc

===

# Express-Session