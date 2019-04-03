const source = $("#players-template").html()
const template = Handlebars.compile(source)

const render = function (players) {
    $("#players").empty()
    let newHtml = template({ players })
    $("#players").append(newHtml)
}

const fetch = function () {
    $.get("/players", function (response) {
        render(response)
    })
}
// ---------------------------
// new 1.1
// ---------------------------
const loadTeams = function() {
    $.get(`/getTeams`,function (response) {
        console.log("loaded completed")
    })
}
const getByTeam = function () {
    let teamInput = $("#search-player-input").val()
    $.get(`/teams/${teamName}`, function (response) {
        console.log("searching by team")
    })
}
$("#load-player-button").on("click", function (){ 
    $.get(`/getTeams` ,function (response) {
        console.log("loaded completed")
        fetch()
    })
})
$("#search-players-byTeam-button").on("click", function (){ 
    let teamName = $("#search-byTeam-input").val()
    $.get(`/teams/${teamName}`,function (response) {
        console.log("GET complete")
        fetch()
    })
})

fetch()
loadTeams()