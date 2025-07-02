$(document).ready(function() {
    // 设置全局的 AJAX 请求头
    $.ajaxSetup({
        headers: {
            't_id': localStorage.getItem('t_id') 
        }
    });
});