const express = require('express')
const server = express()


server.use(express.static('html'))

server.get('/api/time', function (request,response) {
	console.log("time requested")

	response.send({
		time: new Date()
	})
})

server.listen(3000)