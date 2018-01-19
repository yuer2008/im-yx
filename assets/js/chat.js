'use strict';
//未读消息用户列表
var chat_set_unread_userlist = function(obj, data){
	var str='',s_id = '',m,s_id,num=0;
	for(m in data){
        s_id = data[m]['sender_id'];
        num = data[m]['count']; // 未读消息数
        str += '<li class="list-group-item" id="chat_user_' + s_id + '"  data-id="' +s_id+ '">' +s_id+ '<span class="num">'+num+'</span></li>';
    }
	obj.append(str);
}
//在线收到其他用户消息
var chat_add_unread_userlist = function(obj, data){
	var str='',s_id = '', s_id = data['data']['sender_id'],num=1;
	if($("#chat_user_" + s_id).length > 0){
		// num++
		num = $("#chat_user_" + s_id).find('span').html();
		num = parseInt(num) + 1;
		$("#chat_user_" + s_id).find('span').html(num).show();
	} else {
		str += '<li class="list-group-item" id="chat_user_' + s_id + '"  data-id="' +s_id+ '">' +s_id+ '<span class="num">'+num+'</span></li>';
		obj.prepend(str);
	}
}
