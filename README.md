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

# express 설치
터미널에 입력
```bash
$ npm install express --save # express 설치
```
---

# javascript 

## sanitize-html
sanitize : 소독하다
html의 input 또는 textarea 또는 기타등등의 사용자 입력정보에 &lt;script&gt;CODE&lt;/script&gt; 이란 정보를 적으면 웹브라우저에서는 텍스트가 아닌 script 기술로 받아들여서 사용자가 이를 악용하여 악성스크립트를 집어넣을 수 있다.
이로인해 서버의 정보를 빼낼 수 있게 될수도 있다.
이것을 방어하기 위한 node의 패키지모듈로 &lt;script&gt;,&lt;a&gt; 등등 기타 태그들
변환시켜주어 **악성스크립트로 변질되는 것을 막아주는 보안 라이브러리**.