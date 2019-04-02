const express = require('express')
const router = express.Router()
const request = require('request')

// just to show the first page... 
const players = [
    { name: "forrest", team: "Nepal", popular: false },
    { name: "Grand Canyon", team: "Arizona", popular: false },
    { name: "Botanical Gardens", team: "Singapore", popular: true },
    { name: "Pantheon", team: "Greece", popular: false },
    { name: "Colosseum", team: "Italy", popular: true }
]
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
const teams = []
// routes:
router.get('/players', function (req, res) {
    res.send(players)
})

router.get('/team/:teamName', function (req, res) {
    const teamName = req.params.teamName

    // user external API
    const url = "http://data.nba.net/10s/prod/v1/2018/players.json";
    request.get(url, (error, response, body) => {
        const arg = JSON.parse(body)
        this.teams = (arg.league.standard).map(e => ({
            firstName: e.firstName,
            lastName: e.lastName,
            pos : e.pos,
            jersey: e.jersey,
            isActive: e.isActive,
            teamID: e.teams[e.teams.length - 1].teamId
        }))
        console.log(this.teams)
    });

    res.send(players)
})
router.get('/test', function (req, res) {
    res.send("Server up and running")
})


module.exports = router
