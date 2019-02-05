const getHandler = async (ctx) => { 
	ctx.session.username = null 
	return ctx.redirect('/')
}

module.exports = {
	getHandler
}