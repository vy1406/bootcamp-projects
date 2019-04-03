const express = require('express')
const router = express.Router()
const request = require('request')

// just to show the first page... 
const rawdata = [
    { name: "forrest", team: "Nepal", popular: false },
    { name: "Grand Canyon", team: "Arizona", popular: false },
    { name: "Botanical Gardens", team: "Singapore", popular: true },
    { name: "Pantheon", team: "Greece", popular: false },
    { name: "Colosseum", team: "Italy", popular: true }
]

// ---------------------------
// new 1.2
// ---------------------------
router.get('/getTeams', function (req, res) {
    console.log("getting teams")
    const url = "http://data.nba.net/10s/prod/v1/2018/players.json";
    request.get(url, (error, response, body) => {
        const arg = JSON.parse(body)
        this.players = (arg.league.standard).map(e => ({
            firstName: e.firstName,
            lastName: e.lastName,
            pos : e.pos,
            jersey: e.jersey,
            isActive: e.isActive,
            teamID: e.teams[e.teams.length - 1].teamId
        }))
        //console.log(this.players)
    });

    res.send(this.players)
})
router.get('/teams/:teamName', function( req,res){
    const teamToIDs = {
        "lakers": "1610612747",
        "warriors": "1610612744",
        "heat": "1610612748",
        "suns": "1610612756"
    }
    const teamName = req.params.teamName
    const teamArgId = teamToIDs[teamName]

    const arrPlayers = this.players.filter(t => t.teamID = teamArgId)
    res.send(arrPlayers)
})
router.get('/players', function (req, res) {
    res.send(players)
})
router.get('/test', function (req, res) {
    res.send("Server up and running")
})

module.exports = router
