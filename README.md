# Study_NodeJS
Node.js를 이용하여 간단한 웹 서버를 구축해보자.

## 준비하기
이 프로젝트는 Node.js를 이용하여 작업되며,
더 나아가 PM2를 활용하여 웹 서버를 관리하고.
express, express-generator(+pug)를 사용합니다.

## Node.js
Node.js는 공식 홈페이지로 가면 바로 설치 할 수 있다! (Link : [node.js](https://nodejs.org/ko/) )

자신에게 맞는 OS버전으로 설치하도록 하자.
(Tip. 특별한 상황이 아니라면 왼쪽의 LTS버전으로 설치하도록 하자...)

설치가 잘 됐는지 확인하려면
cmd 창에
```cmd
node -v
```
입력했을 때 설치한 버전이 정상적으로 뜨면 완료!


## PM2
파일의 실행 상태를 감시할 수 있고, 실행 중인 파일을 관리하기 용이하게 만들어준다. 또한 파일의 변경 상태를 즉시 반영하는 기능을 갖추고 있어 코드를 변경한 후에 서버를 다시 구동시켜줘야 하는 번거로움을 줄여준다(**--watch** 옵션).

### 설치
터미널에 아래 코드를 적어준다.
```bash
$ npm install pm2 -g
```
이때 **-g** 옵션은 컴퓨터내 사용자가 모두 사용한다는 의미. 특정 local에서만 사용한다면 쓰지 않아도 괜찮다.

### 명령어
```bash
# 프로그램 실행
$ pm2 start filename # default
$ pm2 start filename [--watch] # 파일의 변경을 항상 감지, 재시작 및 반영
$ pm2 start filename [--no-deamon] # 사용자에게 로그 표시
$ pm2 start filename [--ignore-watch="data/*"] # data directory 변경사항 무시

$ pm2 start filename [--watch] [--ignore-watch="data/*"] [--no-daemon] # 파일의 변경 사항 감지/재시작/반영 + 로그 표시 + data dir 변경사항 무시

$ pm2 list # 현재 실행중인 파일 목록/상태 표시
$ pm2 stop [filename] # 실행중인 프로세스 종료
$ pm2 kill # pm2로 실행한 모든 프로세스를 중지&삭제

$ pm2 monit # 현재 pm2로 관리 중인 프로세스의 목록 및 정보 표시

$ pm2 log # 변경 사항 및 상태 로그 표시 (--watch 옵션으로 프로그램을 실행한 경우 터미널로 오류목록을 볼 수 없는데, log를 이용해 볼 수 있다.)
```


## html
웹은 결국 html을 어떻게 잘 구성하는지가 가장 중요하다. 활용할 수 있는 문법들을 적어보자.

### &lt;Form&gt;
url로 정보를 보낼 때 사용할 수 있다.
기본적으로 &lt;form&gt; 태그 안에 &lt;input&gt; 태그를 넣어준다.
```html
<form action="경로명" method="post">
    <input type="text" name="이름" placeholder="기본 텍스트">
    <input type="submit">
    <textarea name="이름">
</form>
```

form 속성
- action : 실행할(이동할) url
- method : 전송할 방식. get-공개적 전송 / post-비공개적 전송. 즉 정보를 숨겨 보내려면 post 방식을 사용해야 한다.

input 속성
- type : 형식
- name : input의 이름. 전송 받은 데이터를 **name** 속성을 이용해 찾을 수 있다. 데이터를 받아 식별해야 한다면 꼭 써줘야 한다.
- placeholder : 기본으로 표시할 가이드 텍스트

---


# study_express
node.js - express 를 활용한 웹 페이지 구성

## 실습준비
서버를 시작하기 전에 package.json에 적힌 모듈들을 설치해야 한다.
```bash
$ npm install # package.json에 적힌 파일을 설치해준다.
```
터미널에 위와 같이 설치하면 "**node_modules**" directory가 생성된다.

그렇다면 다시 터미널에 아래를 입력해 프로그램을 시작해보자.

```bash
$ pm2 start main.js --watch # main.js를 process manager로 실행, 파일의 수정 감지 및 반영
```

## express
node.js를 잘 활용할 수 있게 도와주는 프레임워크
### 설치
터미널에 입력
```bash
$ npm install express --save # express 설치
```

## node.js 보안 모듈
### Middleware : helmet
node.js에서 빈번하게 일어나는 보안 관련 이슈들을 "알아서" 처리해준다.
#### 설치
```bash
$ npm install helmet [--save] # [--save] : 현재 프로젝트에 적용
```
#### 사용
On javascript
```javascript
var helmet = require('helmet'); // security module
app.use(helmet()); // use the helmet module
```

### Cookie
방문자 확인 및 인증에서 활용되는 정보. 안전하게 활용해야한다.

## javascript 

### Middleware : sanitize-html
- sanitize : 소독하다
- **악성스크립트로부터 코드가 변질되는 것을 막아주는** node.js의 **보안 라이브러리**.
- html의 input 또는 textarea 또는 기타등등의 사용자 입력정보에 &lt;script&gt;CODE&lt;/script&gt; 이란 정보를 적으면 웹브라우저에서는 텍스트가 아닌 script 기술로 받아들여서 사용자가 이를 악용하여 악성스크립트를 집어넣을 수 있다. 이로인해 서버의 정보를 빼낼 수 있게 될수도 있다.
- &lt;script&gt;,&lt;a&gt; 등의 태그들을 텍스트 형식으로 변환시켜준다.

## express-generator
node.js의 express에서 제공하는 모범적인 framework이다. 기본적으로 필요한 초기 작업을 "알아서"해준다.

### 설치
```bash
$ npm install express-generator [-g] # [-g] : 컴퓨터 사용자 모두 사용 옵션
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
하지만, 우리는 위에서 **PM2**라는 (아마도) 굉장히 강력한 도구를 알게되었다. 그냥 pm2를 쓰면 된다!

---

## 앞으로 공부할만 한 것

### pug
: html을 더 짧은 코드로 작성할 수 있는 언어
- &lt;&gt;가 없고, 닫는 태그가 없는 것이 특징
- 각 태그의 속성은 소괄호 안에 적는다.
```pug
html
  head
  
  body
    form(action="경로명" method="post") //- 속성은 소괄호 안에 작성
      input(type="text" name="이름" placeholder="기본 텍스트")
      input(type="submit")
      textarea(name="이름")
    //- 닫는 태그가 없다.
  footer
```
- 기존 html에서는 불가능 했던, **반복문** 및 **조건문** 등 확장 된 기능 제공

#### 설치
```bash
$ npm stall pug [--save] # [--save] : 현재 프로젝트에 적용
```

### Database
: 현대 웹에서는 필수 요소.
- MySQL
```bash
$ npm install mysql # MySQL 설치
```
- MongoDB
```bash
$ npm install monodb # MongoDB 설치
```

### Middleware
: express의 기능을 더욱 확장시킬 수 있는 좋은 방법. middleware를 잘 쓰면 그만큼 express를 잘 쓸 수 있다!

---

# Cookie와 인증
쿠키를 이용하면 각 사용자를 식별/인증 할 수 있고, 사용자별로 다른 서비스를 제공 할 수 있다.

## session cookies / permanent cookies
- session cookie : 휘발성 / 웹브라우저를 끄면 사라짐.
- permanent cookie : 비휘발성 / 웹브라우저를 꺼도 사라지지 않음.

## cookie parser
쿠키를 그대로 다루기보다 검증된 middleware를 통해 다루면 훨씬 편리하다

### Cookie middleware 설치
```bash
npm install -s cookie # express cookie 미들웨어 설치. [-s] : 현재 프로젝트에 적용 옵션
```

### 선언 및 사용
```javascript
var cookie = require('cookie'); // cookie middleware 선언
```
require()를 통해 middleware를 사용할 수 있다.

```javascript
// session cookie 생성
'Set-Cookie':'yummy_cookie=choco'; // 쿠키 값이 하나일 경우
'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']; // 복수일 때는 항상 배열의 형태

// permanent cookie 생성 : MAx-Age 옵션 추가. (단위 : 초)
'Set-Cookie': `CookieName=Value; Max-Age=${60*60*24*30}`;

// 쿠키 분석
request.headers.cookie // request.headers.cookie로 정보가 들어온다. 이를 통해 쿠키를 얻을 수 있다.

var cookies = {};
if(request.headers.cookie != undefined) { 
    cookies = cookie.parse(request.headers.cookie); // cookie parser는 undefined인 경우는 제대로 작동하지 못하니, 걸러줘야한다.
}
console.log(cookies.yummy_cookie); // =choco
console.log(cookies.tasty_cookie); // =strawberry
```

### 쿠키 삭제
값은 공백, 옵션은 **Max-Age=0**으로 설정하면 된다!
```javascript
'Set-Cookie':[
  `email=; Max-Age=0`,
  `password=; Max-Age=0`,
  'nickname=; Max-Age=0'
        ],
```

## options 1 : Secure & https only
쿠키 생성 시 **Secure/HttpOnly** 옵션을 넣어주면 된다
- Secure : https로 접속할 때만 표시. http에 비해 https는 통신 내용이 암호화 되기 때문에 보안성이 더 높다.
- HttpOnly : 웹 통신을 할 때만 표시. javascript를 이용해 접근 못하게 함
```javascript
'Set-Cookie': 'CookieName=Value; Secure;'
'Set-Cookie': 'CookieName=Value; HttpOnly;'
```

## options 2 : Path, Domain 제한
쿠키 생성 시 **Path/Domain** 옵션을 넣어주면 된다
- /cookie이하 경로에만 쿠키 존재
- o2.org 도메인에서만 쿠키 존재
```javascript
'Set-Cookie': 'CookieName=Value; Path=/cookie;'
'Set-Cookie': 'CookieName=Value; Domain=o2.org;'
```

## 더 공부할 만한 것

### Session
javascript를 활용해 얼마든지 쿠키를 가로챌 수 있다. 그래서 쿠키 내부에 중요한 정보(id, password, etc)를 보내는 것은 매우 위험하다.

따라서 session을 활용하여 (식별이 어려운, 암호화 된)값을 보내고 실제 데이터는 따로 인증하는 방법을 적용 할 수 있다.

### Local Database

### 웹 개인화
- 사용자 별 언어 설정
- 사용자 개인 설정 유지
- etc

---

# Express-Session
cookie 정보만을 이용해 사용자를 구분하고 인증한다면, 익스프레스의 검사 기능을 쓴다면 그 정보를 쉽게 빼낼 수 있다. 이 때 사용자의 아이디나 비밀번호가 유출된다면 큰 문제가 발생 할 수 있다.

session을 통해 정보를 주고 받는다면 암호화 된 session정보만 보내게 되므로 조금 더 보안성이 높아지게 된다.

session을 활용해 보자.

## session 설치
```bash
$ npm install [-s] express-session # express-session 설치. [-s] : 현재 프로젝트에 적용
```

## session 사용
```javascript
var express = require('express')
var session = require('express-session')

var app = express()

// session 정보 기록
app.use(session({ // 사용자 요청이 있을 때마다 session을 시작
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// session 정보 삭제 (logout)
request.session.destroy(function(err){ // session 정보 모두 삭제
  response.redirect('/');
})
```
### 속성
- secret : 버전 관리가 필요할 때는 꼭 별도의 파일에 값을 빼놔야 한다.
- reasave : (default=false)
- saveUninitialized : (default=true)

# session-file-store
세션 데이터 저장소를 만들 때 활용할 수 있는 미들웨어

### 설치
```bash
$ npm install [-s] session-file-store # session-file-store 설치. [-s] : 현재 프로젝트에 적용
```

### 사용
```javascript
var FileStore = require('session-file-store')(session) // 미들웨어 선언

// session file 저장
app.use(session({
  // 아래 값 추가
  store:new FileStore() // 사용자가 접근하면 적절한 session으로 변환하여 sessions folder에 값을 저장
}))
```