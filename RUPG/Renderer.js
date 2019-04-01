// Fill in the functions for your Renderer Class

class Renderer {

    _renderUser(user) {
        console.log("in _renderUser")
        console.log(user)
        const data = {
            "user": user
        }
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(data)
        $(".user-container").append(newHTML)
        console.log("------------------------------")
    }

    _renderFriends(users) {
        console.log("in _renderFriends")
        console.log(users)
        console.log("------------------------------")
    }

    _renderQuote(quoteInfo) {
        const data = {
            "quote": quoteInfo.quote,
            "author" : quoteInfo.author
        }
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(data)
        $(".quote-container").append(newHTML)
    }

    _renderPokemon(pokemon) {
        console.log("in _renderPokemon")
        console.log(pokemon)
        console.log("------------------------------")
        const data = {
            "name": pokemon.name,
            "sprites" : pokemon.sprites
        }
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(data)                    // !!! ERROR here, missing helper
        $(".pokemon-container").append(newHTML)
    }

    _renderMeat(meatText) {
        const data = {
            "text": meatText
        }
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(data)
        $(".meat-container").append(newHTML)
    }

    
}

