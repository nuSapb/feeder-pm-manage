const log = ctx => {
  console.log("object")
  console.log(ctx.request.body)
}

module.exports = {
  log
}
