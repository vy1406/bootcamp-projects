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

$("#search-players-byTeam-button").on("click", function (){ 
    let teamName = $("#search-byTeam-input").val()
    $.get(`/teams/${teamName}`,function (response) {
        //console.log(`filtering by : ${teamName}`)
        render(response)
    })
})

fetch()