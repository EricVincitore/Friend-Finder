var friendData = require("../data/friends");


module.exports = function (route) {

    route.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    route.post("/api/friends", function (req, res) {
        console.log(req.body)
        var newScoreArray = []
        var userScore = req.body.scores
        var sumTotal = 0
        for (let i = 0; i < friendData.length; i++) {

            var friendsScore = friendData[i].scores;
            sumTotal = 0;
            for (let j = 0; j < friendsScore.length; j++) {

                sumTotal += Math.abs(parseInt(userScore[j]) - parseInt(friendsScore[j]))

            };

            newScoreArray.push({
                sumTotal: sumTotal,
                name: friendData[i].name,
                photo: friendData[i].photo
            });

        };
        newScoreArray.sort(function (a, b) {
            return a.sumTotal - b.sumTotal
        });
        
        
        console.log(newScoreArray)



        friendData.push(req.body);
        res.json(newScoreArray[0]);
    });
};

