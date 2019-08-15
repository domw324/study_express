const express = require('express')
const app = express()

var fs = require('fs'); // controling the file system
// var qs = require('querystring'); // parsing the data on request
var bodyParser = require('body-parser'); // middleware : 
var compression = require('compression'); // middleware : 전송 데이터 압축
var helmet = require('helmet'); // security module

var template = require('./lib/template.js');
var topicRouter = require('./routes/topic');

app.use(express.static('public')); // public directory에서 static file 검색 & 사용
app.use(bodyParser.urlencoded({ extended: false})); // body-parser 사용
app.use(compression()); // compression 사용
app.use(helmet());
// custom middleware : directory filelist 반환. get 방식 요청의 모든 경로에서 실행
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});
//route, routing
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) {
  /*
  // custom middleware 사용 전 코드
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    response.send(html);
  });
  */
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
    `
    ,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
});

// router : /topic 경로로 들어오는 모든 요청 topicRouter가 처리 (router code 내부에서 /topic 경로 써줄 필요 없음)
app.use('/topic', topicRouter);

// 404 : Not Founded Error
app.use(function(req, res, next) {
  res.status(404).setDefaultEncoding('Sorry cant find that!');
});

// error 처리
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

/* // 이제 쓰지 않을 것!
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
    } else if(pathname === '/create'){
      
    } else if(pathname === '/create_process'){
      
    } else if(pathname === '/update'){
      
    } else if(pathname === '/update_process'){
      
    } else if(pathname === '/delete_process'){
      
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
*/