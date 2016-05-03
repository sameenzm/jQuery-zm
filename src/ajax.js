/**
 * Created by Sameen
 */
define(function (require) {
	function ajax (config) {
		var doneFn;
		var url = config.url;
		var success = config.success;
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open('post', url);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					doneFn(xhr.responseText);
					success(xhr.responseText);
				}
			}
		};
		xhr.send(xhr.responseText);
		return{
			/*
			 *返回一个done对象
			 */
			 done: function(ourfn){
			 	doneFn = ourfn;
			 }
		}
	}
	return ajax;
});