module.exports = {
  isOnwer:function(request, response) {
    if(request.session.is_logined) {
      return true;
    } else {
      return false;
    }
  },statusUI:function(request, response) {
    var authStatusUI = '<a href="/auth/login">login</a>';
    if(this.isOnwer(request,response)){
      authStatusUI = `${request.session.nickname}님 반갑습니다 | <a href="/auth/logout">logout</a>`;
    }
    return authStatusUI;
  }
}