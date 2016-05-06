/**
 * Created by Sameen
 */
define(function (require) {
	function ajax(config){
		// var doneFn;
		var url = config.url,
		data = $.isPlainObject(config.data) ? config.data : {},
		success = config.success ? config.success : null,
		errors = config.errors ? config.errors : null;
		
		var strData = JSON.stringify(data).replace(/{/,"").replace(/}/,"").replace(/"/g,"").replace(/:/g,"=").replace(/,/g,"&");
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open('POST', url, true);		//true: 异步(默认)
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(strData);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					// doneFn(xhr.responseText);
					success(xhr.responseText);
				}
				else{
					errors(xhr.responseText);
				}
			}
		};
		// return{
		// 	/*
		// 	 *返回一个done对象
		// 	 */
		// 	 done: function(ourfn){
		// 	 	doneFn = ourfn;
		// 	 }
		// }
	}
	return ajax;
});
