
const Renderer = function () {

    const renderPosts = function (posts) {

        $("#posts").empty();
        addPosts(posts)
    }

    // ---------------------------------
    // helping function for code readability
    // ---------------------------------
    const addPosts = function (posts) {
        for (let i = 0; i < posts.length; i++) {

            const $curPostElem = $("<div></div>");
            $curPostElem.addClass("post")
            $curPostElem.attr("id", posts[i].id) // new line
            $curPostElem.append("<h3>" + posts[i].text + "</h3>");

            createCommentsForCurrentPostElem($curPostElem, i)
            createCommentInputAndBtn($curPostElem)
            createDeletePostButton($curPostElem)
            $("#posts").append($curPostElem)
        }
    }

    // ---------------------------------
    // helping function for code readability
    // ---------------------------------
    const createCommentsForCurrentPostElem = function ($curPostElem, i) {
        for (let j = 0; j < posts[i].comments.length; j++) {
            const curComment = posts[i].comments[j]

            const $icon = $("<i></i>")
            $icon.addClass("fas fa-times")
            $icon.css({
                "color": "red",
                "margin": "2px"
            })

            const $curCommentToAdd = $("<div></div>")
            $curCommentToAdd.addClass("comments")

            $curPostElem.append($curCommentToAdd)
            $curCommentToAdd.append($icon)
            $curCommentToAdd.append(`<span>${curComment.text}</span>`)

            $icon.on("click", function () {
                //console.log("cur post id : " + posts[i].id + ", cur com id: " + curComment.id)
                logic().removeComment(posts[i].id, curComment.id)
                const curDiv = $(this).closest("div").remove()
            })

        }

    }

    // ---------------------------------
    // helping function for code readability
    // ---------------------------------
    const createCommentInputAndBtn = function ($curPostElem) {
        const $comment = $('<input type="text">')
        $comment.addClass("inputComment")
        $comment.attr("placeholder", "Type your comment here...")
        $curPostElem.append($comment)

        const $button = $('<button>Comment</button>')
        $button.addClass("commentBtn")
        $button.on("click", function () {

            const inputValue = $(this).closest(".post").find(".inputComment").val()
            const postID = $(this).closest(".post").attr("id")
            if (inputValue != "") {
                logic().addComment(inputValue, postID)
                updatePage()
            }
            else
                alert("i saw that coming... cannot add empty comment")

        })

        $curPostElem.append($button)
    }
    const updatePage = function () {
        console.log(logic().getPosts())
        renderPosts(posts)
    }

    const createDeletePostButton = function ($curPostElem){
        const $button = $('<button>Delete</button>')
        $button.addClass("deletePostButton")
        $curPostElem.append($button)
        $button.on("click", function() {
            
            const postID =  $(this).closest(".post").attr("id")
            logic().removePost(postID) 
            updatePage()
        })
    }
    const creatCommentFromInput = function ($curPostElem, $curCommentToAdd) {

        const $icon = $("<i></i>")
        $icon.addClass("fas fa-times")
        $icon.css({
            "color": "red",
            "margin": "2px"
        })
        $icon.on("click", function () {
            const curDiv = $(this).closest("div").remove()
            const postId = $(this).closest(".post").attr("id")
            const commentId =
                logic().removeComment()
        })

        const $curCommentToAdd = $("<div></div>")
        $curCommentToAdd.addClass("comments")

        $curPostElem.append($curCommentToAdd)

        $curCommentToAdd.append($icon)
        $curCommentToAdd.append(`<span>${curComment.text}</span>`)
    }

    return {
        renderPosts: renderPosts
    }
}

