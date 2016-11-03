var friendData = require("../data/friends.js");

module.exports = function (app){
	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res){
		
		var bestMatch = null;
		var difference = null;

		var currentFriend = req.body;

		for (var i = 0; i < friendData.length i++){
			
		}
		friendData.push(req.body);
		res.json(true);
	})

}