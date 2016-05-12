define(function (require){

	var done, fail, always;
	var $ = require('./base');
	function Deferred(fn){
		done = function(){
			done.apply(this, arguments);
		};

		fail = function(){
			fail.apply(this, arguments);
		};

		always = function(){
			always.apply(this, arguments);
		};

		fn(done, fail, always);
	}

	Deferred.prototype.done = function(cb){
		done = cb;
		return this;
	};

	Deferred.prototype.fail = function(cb){
		fail = cb;
		return this;

	};

	Deferred.prototype.always = function(cb){
		always = cb || $.noop;
		return this;

	};
	return Deferred;
});