var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
    // console.log(request.headers.cookie); // 들어온 쿠키 값
    var cookies = {};
    if(request.headers.cookie != undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    // console.log(cookies.yummy_cookie); // yummy_cookie
    // console.log(cookies.tasty_cookie); // tasty_cookie
    response.writeHead(200, {
        'Set-Cookie':[
          'yummy_cookie=choco',
          'tasty_cookie=strawberry',
          `Permanent=cookies; Max-Age=${60*60*24*30}`,
          'Secure=Secure; Secure;',
          'HttpOnly=httpOnly; HttpOnly',
          'Path=Path; Path=/cookie',
          'Domain=Domain; Domain=o2.org'
        ]
    })
    response.end('Cookie!!');
}).listen(3000);