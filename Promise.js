{
	const Emit = require('EventEmiter').EventEmiter;
	const Promise = function(){
		Emit.call(this);
	}
	util.inherits(Promise, Emit);
	Promise.prototype.then = function(fulfilled, err, progress){
		if(typeof fulfilled === 'function'){
			this.on('fulfilled', fulfilled);
		}
		if(typeof err === 'function'){
			this.once('err', err);
		}
		if(typeof progress === 'function'){
			this.on('progress', progress)
		}
		return this;
	}

	const Deferred = function(){
		this.state = 'unfulfilled'
		this.promise = new Promise();
	}

	Deferred.prototype.resolve = function(data){
		this.promise.emit('fulfilled', data);
	}
	Deferred.prototype.reject = function(data){
		this.promise.emit('err', data);
	}
	Deferred.prototype.progress = function(data){
		this.promise.emit('progress', data);
	}

	export Promise;
}