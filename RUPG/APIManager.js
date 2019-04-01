//This is the class that will manage all your APIs

class APIManager {
    constructor(renderer) {
        this.data = {},
            this.renderer = renderer
    }

    getPokemon() {
        // cant pass 807 pokemon
        const randomPokeID = Math.floor((Math.random() * 700) + 1);
        $.get(`https://pokeapi.co/api/v2/pokemon/${randomPokeID}/`, (result) => {
            let pokemon = {
                sprites: result.sprites,
                name: result.name
            }
            this.data.pokemon = pokemon
            //this.renderer._renderPokemon(pokemon)
        })
    }
    getMeat() {
        // returns Lorem Ipsum text
        $.get("https://baconipsum.com/api/?type=meat", (result) => {
            this.data.aboutme = result[0]
            this.renderer._renderMeat(result[0])
        })
    }

    // ajax request ( example )
    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://quotes.rest/qod',
            success: (result) => {
                //this.data.quote.author = result.contents.quotes[0].author
                let quote_text = result.contents.quotes[0].quote
                let author = result.contents.quotes[0].author
                let quote = {
                    quote: quote_text,
                    author: author
                }
                this.data.randomQuote = quote
                this.renderer._renderQuote(quote)
            }
        })

    }
    getUsers() {
        $.get("https://randomuser.me/api/?results=7", (result) => {
            let users = result.results
            this.data.users = users
            this.renderer._renderUser(users[0])
            this.renderer._renderFriends(users.splice(1))
        })

    }
    loadData() {
        this.getUsers()
        this.getQuote()
        this.getPokemon()
        this.getMeat()
    }

    printdata() {
        console.log(this.data)
    }
}


