//获取当前时间
var now_time = function(){
	var d = new Date();
	var m = d.getMonth()+1;
	return d.getFullYear() +'-'+ m +'-' + d.getDate() +' '+ d.getHours() +':'+ d.getMinutes() +':'+ d.getSeconds();
};
var check_status = function(ws){
	if(typeof ws != 'undefined'){
		ws.readyState == 3
		//layer.msg('connection is closed');
	}
    
};
