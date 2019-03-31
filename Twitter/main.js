const tweeter = logic()
const renderer = Renderer()

console.log("MY DUMMY DATA: ")
console.log(tweeter.getPosts())

tweeter.addPost("This is my own post!")
tweeter.addPost("Last added")
console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    const newPostString = $("#input").val()
    if (newPostString == "")
        alert("saw that comming... cannot add empty post")
    else {
        tweeter.addPost(newPostString)
        renderer.renderPosts(tweeter.getPosts())
    }
})

const post = function () {
    renderer.renderPosts(tweeter.getPosts())
}

$('#btn').on("click", alert('hi'))
$('#btn').on("click", () => {alert('hi')})