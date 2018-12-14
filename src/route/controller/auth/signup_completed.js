const bcrypt = require('bcrypt') 
const user = require("../../../models/user")
const refRole = require("../../../models/refRole")

const postHandler = async (ctx,next) => {
	const signupData =[
		ctx.request.body.fullname,
		ctx.request.body.username,
		ctx.request.body.username,
		await bcrypt.hash(ctx.request.body.password,5),
		ctx.request.body.roleId,
		ctx.request.body.tel

    ]
    await user.saveUser(signupData);
    
    await ctx.render('signup_completed',{
        
        username : ctx.request.body.username
    });
    await next();
}

module.exports = {
	postHandler
}