var friendData = require("../data/friends.js");

module.exports = function (app){
	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res){
		
		var bestMatch = null;
		var difference = 0;
		var minDifference;

		var currentFriend = req.body;

		for (var i = 0; i < friendData.length i++){
			difference = 0;
			for (var j = 0; j<currentFriend.scores.length; j++){
				difference += Math.abs(currentFriend.scores[j] - friendData[i].scores[j]);		 		
			}
			if (!bestMatch){
				bestMatch = friendData[i];
				minDifference = difference;
			} else if (minDifference >= difference){
				bestMatch = friendData[i];
				minDifference = difference;
			}
		}
		res.send(bestMatch);
		friendData.push(req.body);		
	})

}