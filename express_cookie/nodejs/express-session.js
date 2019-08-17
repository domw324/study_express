var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
  
var app = express()

// session 사용 시 request 객체의 preperty로 들어간다.
app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}))

app.get('/', function (req, res, next) {
  if(req.session.num === undefined){ // 해당 속성이 없을 경우 만들어 줌
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }
  console.log(req.session)
  res.send(`Views : ${req.session.num}`)
})
 
app.listen(3000, function(){
  console.log('3000!')
})