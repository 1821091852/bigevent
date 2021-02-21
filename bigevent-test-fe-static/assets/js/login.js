$(function () {
    // 1.jquery粒子系统插件
    $('#particles').particleground({
        dotColor: '#7ec7fd',
        lineColor: '#7ec7fd',
    });
})
//2.自定义验证规则
var form = layui.form;
form.verify({
    //密码规则
    pwd: [
        /^[\S]{5,12}$/
        , '密码必须5到12位，且不能出现空格'
    ]
});

//3.监控登入表单提交事件
var form = layui.form;
$("#form_login").on("submit", function (e) {
    // 阻止表单默认提交
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/api/login",
        data: $(this).serialize(),
        success: function (res) {
            // 若登录失败
            if (res.status !== 0) {
                return layer.msg(res.message);
            }
            //提交成功后处理代码
            layer.msg("登录成功!")
            //在本地保存token
            localStorage.setItem("token",res.token)
            // 跳转到后台
            location.href = "/index.html";
        }
    })
})