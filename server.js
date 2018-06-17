const express = require('express')
const server = express()


server.use(express.static('html'))
//server.get('/', function (request,response) {
//	console.log('request form',request.connection.remoteAdress,)
//		
//	fs.readFile('index.html',funt)
//
//	response.send(`
//		<html>
//			<head>
//				<title> Page </title>
//			
//			</head>
//
//			<body>
//			<style>	
//				body {
//					color:pink;
//					font-size: 4vh;
//				}
//			</style>
//				helo
//			</body>
//		</html>
//			`)
//})

server.listen(3000)