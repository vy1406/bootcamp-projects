const express = require('express')
const router = express.Router()
const request = require('request')

// just to show the first page... 
let arrPlayers = []
// ---------------------------
// new 1.2
// ---------------------------
// router.get('/getTeams', function (req, res) {
//     console.log("getting teams")
//     const url = "http://data.nba.net/10s/prod/v1/2018/players.json";
//     request.get(url, (error, response, body) => {
//         const arg = JSON.parse(body)
//         console.log(arg)
//         this.players = (arg.league.standard).map(e => ({
//             firstName: e.firstName,
//             lastName: e.lastName,
//             pos: e.pos,
//             jersey: e.jersey,
//             isActive: e.isActive,
//             teamID: e.teams[e.teams.length - 1].teamId,
//             img: `https://nba-players.herokuapp.com/players/${e.lastName}/${e.firstName}`
//         }))
//         //console.log(this.players)
//         res.send(this.players)
//     });


// })


router.get('/teams/:teamName', function (req, res) {

    const teamToIDs = {
        "lakers": "1610612747",
        "warriors": "1610612744",
        "heat": "1610612748",
        "suns": "1610612756"
    }

    const teamName = req.params.teamName
    const teamArgId = teamToIDs[teamName]
    const arrFilteredPlayers = arrPlayers.filter(t => t.teamID == teamArgId)
    res.send(arrFilteredPlayers)

})
router.get('/players', function (req, res) {
    // console.log("getting teams first time 1")
    const url = "http://data.nba.net/10s/prod/v1/2018/players.json";
    request.get(url, (error, response, body) => {
        const arg = JSON.parse(body)
        this.players = (arg.league.standard).map(e => ({
            firstName: e.firstName,
            lastName: e.lastName,
            pos: e.pos,
            jersey: e.jersey,
            isActive: e.isActive,
            teamID: e.teams[e.teams.length - 1].teamId,
            img: `https://nba-players.herokuapp.com/players/${e.lastName}/${e.firstName}`
        }))
        
        const arrFilteredPlayers = this.players.filter(t => t.teamID == "1610612747" || 
                                                            t.teamID == "1610612744" ||
                                                            t.teamID == "1610612748" ||
                                                            t.teamID == "1610612756")
        arrPlayers = arrFilteredPlayers     
        res.send(arrFilteredPlayers)
    });
})
router.get('/test', function (req, res) {
    res.send("Server up and running")
})

module.exports = router
