const express = require('express')

const server = express()

server.get('/', function (request,response) {
	response.send('ok')
})

server.listen(3000)