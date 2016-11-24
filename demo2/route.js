{
	const route = (pathname, handle) => {
		if(typeof(handle[pathname]) === 'function'){
			handle[pathname]();
		}
	}
	exports.route = route;
}