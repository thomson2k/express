console.log('client ready')

function reloadTime () {
fetch('/api/time')
	.then( function (response) {
		return response.json()
	})
	.then(function (data) {
		document
			.querySelector("#time")
			.innerHTML = data.time
	})
}

reloadTime()

function reloadCounter () {
fetch('/api/counter')
	.then( function (response) {
		return response.json()
	})
	.then(function (data) {
		document
			.querySelector("#counter")
			.innerHTML = data.count
	})
}

reloadCounter ()
