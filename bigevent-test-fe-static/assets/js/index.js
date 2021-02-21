$(function () {
    // 判断token是否存在
    var token = localStorage.getItem('token')
    if (!token) {
        // 表示token不存在，跳转到登录页面
        location.href = '/login.html'
    }
    //点击退出
    $("#btnLogout").on("click", function () {
        //弹出询问框
        layer.confirm('是否确认退出?', { icon: 3, title: '提示' }, function (index) {
            //1.清空本地token
            localStorage.removeItem("token");
            //2.跳回登录页面
            location.href = "/login.html"
            //3.关闭询问框
            layer.close(index);
        });
    })
})
