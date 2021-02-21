$(function () {
    //自定义验证规则
    var form = layui.form;
    form.verify({
        //用户名
        username: function (value) {
            if (value.length > 8) {
                return "用户名长度为1-8位之间!";
            }
        },
        // 昵称
        nickname: function (value) {
            if (value.length > 6) {
                return "昵称长度为1-6位之间!";
            }
        }
    });
    // 获取用户id
    let id = new URLSearchParams(location.search).get('id')

    function loadUserInfo() {
        $.ajax({
            type: 'get',
            url: '/admin/users/' + id,
            success: function (res) {
                if (res.status === 0) {
                    form.val('editForm', res.data)
                } else {
                    layer.msg(res.message)
                }
            }
        })
    }
    loadUserInfo()

    // 绑定添加用户表单提交事件
    $('.layui-form').submit(function (e) {
        e.preventDefault()
        var fd = $(this).serialize()
        $.ajax({
            type: 'put',
            url: '/admin/users',
            data: fd,
            success: function (res) {
                layer.msg(res.message)
            }
        })
    })
    loadUserInfo()
    
})