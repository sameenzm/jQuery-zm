/**
 * Created by Sameen
 */
define(function (require) {
	var doneFn, fialFn, success, errors, url, data;
	var deferred = {
		done: function (fn) {
			success = fn;
		},
		fail: function (fn) {
			errors = fn;
		}
	};
	function ajax(config){
		
		url = config.url;
		data = $.isPlainObject(config.data) ? config.data : {};
		success = config.success ? config.success : null;
		errors = config.errors ? config.errors : null;

		var strData = JSON.stringify(data).replace(/{/,"").replace(/}/,"").replace(/"/g,"").replace(/:/g,"=").replace(/,/g,"&");
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open('POST', url, true);		//true: 异步(默认)
		xhr.setRequestHeader('User-Agent','XMLHTTP');	//方便服务器识别当前请求为ajax异步请求
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(strData);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					success ? success(xhr.responseText) : null;
				}
				else{
					errors ? errors(xhr.responseText) : null;
				}
			}
		};
		return deferred;
	}
	return ajax;
});
