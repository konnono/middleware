const moment = require('moment')

function timeLog(req, res, next) {
  const reqTime = new Date()
  res.on('finish', () => {
    const resTime = new Date()
    const timeDiff = resTime - reqTime
    console.log(`${moment(reqTime).format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.originalUrl} | total time: ${timeDiff}ms`)
  })
  next()
}

module.exports = timeLog