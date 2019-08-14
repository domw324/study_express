# study_express
node.js - express 를 활용한 웹 페이지

---

# 실습준비
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

# express
## 설치
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

# javascript 

## sanitize-html
sanitize : 소독하다
html의 input 또는 textarea 또는 기타등등의 사용자 입력정보에 &lt;script&gt;CODE&lt;/script&gt; 이란 정보를 적으면 웹브라우저에서는 텍스트가 아닌 script 기술로 받아들여서 사용자가 이를 악용하여 악성스크립트를 집어넣을 수 있다.
이로인해 서버의 정보를 빼낼 수 있게 될수도 있다.
이것을 방어하기 위한 node의 패키지모듈로 &lt;script&gt;,&lt;a&gt; 등등 기타 태그들
변환시켜주어 **악성스크립트로 변질되는 것을 막아주는 보안 라이브러리**.

---

# express-generator
node.js의 express에서 제공하는 모범적인 framework이다. 기본적으로 필요한 초기 작업을 "알아서"해준다.

## 설치
```bash
$ npm install express-generator -g
```

설치 이후 명령어가 궁금하다면
```bash
$ express -h
```

## 구조
- bin (dir)
- public (dir) : store for save Static File
- routes (dir) : router (javascript file)
- views (dir) : code (pug:html)
- app.js : executing main file

## 실행
```bash
$ DEBUG=[Project.name]:& npm start # Mac
$ set DEBUG=[Project.name]:* & npm start # windows
```

---

# 앞으로 공부할만 한 것

## pug
: html을 더 짧게 작성할 수 있는 코드. (반복문 및 조건문 등 확장 된 기능 제공)
### 설치
```bash
$ npm stall pug --save
```

## Database
: 현대 웹에서는 필수 요소.
### MySQL
```bash
$ npm install mysql
```
### MongoDB
```bash
$ npm install monodb
```

## Middleware
: express의 기능을 더욱 확장시킬 수 있는 좋은 방법. middleware를 잘 쓰면 그만큼 express를 잘 쓸 수 있다!