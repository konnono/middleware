// app.js
const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

// 先處理/favicon.ico的相關request再套用印出timestamp的middleware
app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204)
})

function timeLog(req, res, next) {
  const reqTime = new Date()
  console.log(`${moment(reqTime).format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.originalUrl}`)
  next()
}

app.use(timeLog)


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})