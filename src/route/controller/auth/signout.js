const getHandler = async (ctx) => { 
	ctx.session.username = null 
	return ctx.redirect('/')
	// await ctx.render("/")
}

module.exports = {
	getHandler
}