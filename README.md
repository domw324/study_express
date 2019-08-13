# study_express
node.js - express 를 활용한 웹 페이지

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

# express 설치
터미널에 입력
```bash
$ npm install express --save # express 설치
```