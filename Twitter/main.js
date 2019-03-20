const tweeter = logic()
const renderer = Renderer()

console.log("MY DUMMY DATA: ")
console.log(tweeter.getPosts())

 tweeter.addPost("This is my own post!")
 tweeter.addPost("Last added")
 console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
 //console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

// console.log("comments for post p2 : ")
//console.log(tweeter.getComments("p2"))
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
//console.log(" --- end ---")


renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){
    renderer.renderPosts(tweeter.getPosts())
})

const post = function() {
    renderer.renderPosts(tweeter.getPosts())
}
/*
const curComment = posts[j].comments[j]
                const $curCommentToAdd = $("<div></div>")
                const $icon = $('<i></i>')
                $icon.attr("color", "red")
                $icon.addClass("fas fa-times")

                $curCommentToAdd.addClass("comments")
                $curCommentToAdd.append($icon)
                $curCommentToAdd.html(curComment.text)

                $curElement.append($curCommentToAdd)



                                const curComment = posts[j].comments[j]
                const $curCommentToAdd = $("<div>" + curComment.text + " </div>")
                const $icon = $("<i></i>")
                //<i class="fas fa-times"></i>
                $icon.addClass("fas fa-times")
                $curCommentToAdd.addClass("comments")
                $curCommentToAdd.append($icon)
*/