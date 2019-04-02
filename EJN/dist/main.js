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


$("#search-player-button").on("click", function (){ 
    let teamName = $("#search-player-input").val()
    console.log("1: " + teamName)
    $.get(`/team/${teamName}`,function (response) {
        console.log("GET complete")
    })
})

fetch()