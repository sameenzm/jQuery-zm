/**
 * Created by Sameen
 */
define(function (require) {
	var Deferred = require('./deferred');
	var $ = require('./base');
	function ajax(config){		
		var url = config.url;
		var type = config.type || 'POST';
		var data = $.isPlainObject(config.data) ? config.data : {};
		var success = config.success ? config.success : $.noop;
		var error = config.error ? config.error : $.noop;
		return new Deferred(function (done, fail, always) {
			var strData = JSON.stringify(data).replace(/{/,"").replace(/}/,"").replace(/"/g,"").replace(/:/g,"=").replace(/,/g,"&");
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			xhr.open(type, url, true);		//true: 异步(默认)
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			xhr.send(strData);
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					var isError = xhr.status !== 200;
					var responseText = xhr.responseText;
					var errorStatus = xhr.status;
					isError ? error(errorStatus) : success(responseText);
					
					if (isError) fail(errorStatus);
					else done(responseText);
					always();
				}
			};
		});
	}
	return ajax;
});