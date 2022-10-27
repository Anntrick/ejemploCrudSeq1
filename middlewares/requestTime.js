

module.exports = (req, res, next) => {
    let time = req.requestTime = Date.now()
    console.log(time)
    next()
}
