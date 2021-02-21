$(function () {
    // 添加用户
    var form = layui.form;
    
    form.verify({
        //用户名
        username: function (value) {
            if (value.length > 8) {
                return "用户名长度为1-8位之间!";
            }
        },
        //昵称
        nickname: function (value) {
            if (value.length > 6) {
                return "昵称长度为1-6位之间!";
            }
        },
        //密码
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        //两次密码必须相同
        rePwd: function (value) {
            if (value !== $("[name = password]").val()) {
                return "两次密码输入不一致";
            }
        },
    });

    // 绑定添加用户表单提交事件
    $('.layui-form').submit(function (e) {
        e.preventDefault()
        var fd = $(this).serialize()
        $.ajax({
            type: 'post',
            url: '/admin/users',
            data: fd,
            success: function (res) {
                layer.msg(res.message)
            }
        })
    })
})