//端口根目录
var baseURL = "http://localhost:8888"

$.ajaxPrefilter(function (options) {
    options.url = baseURL + options.url;
    //统一为有权限的接口,设置header请求头
    // 查不到的值,indexOf()为-1
    if (options.url.indexOf("/admin/") !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    //不登陆,不允许访问后台
    options.complete = function (res) {
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        // res.responseJSON.status === 401 && res.responseJSON.message === '身份认证失败！'
        if (res.responseJSON.status === 401 && res.responseJSON.message === '身份认证失败！') {
            // 1. 强制清空 token
            localStorage.removeItem('token')
            // 2. 强制跳转到登录页面
            location.href = '/login.html'
        }
    }
});