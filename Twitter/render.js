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
            $curPostElem.append("<h3>" + posts[i].text + "</h3>");

            createCommentsForCurrentPostElem($curPostElem)
            createCommentInputAndBtn($curPostElem)  
            
            $("#posts").append($curPostElem)
        }
    }

    // ---------------------------------
    // helping function for code readability
    // ---------------------------------
    const createCommentsForCurrentPostElem = function($curPostElem) {
        for (let j = 0; j < posts[j].comments.length; j++) {
            const curComment = posts[j].comments[j]

            const $icon = $("<i></i>")
            $icon.addClass("fas fa-times")
            $icon.css({
                "color": "red",
                "margin": "2px"
            })
            $icon.on("click", function () {
                console.log("i'm clicked!")
            })
            const $curCommentToAdd = $("<div></div>")
            $curCommentToAdd.addClass("comments")

            $curPostElem.append($curCommentToAdd)

            $curCommentToAdd.append($icon)
            $curCommentToAdd.append(`<span>${curComment.text}</span>`)

        }

    }

    // ---------------------------------
    // helping function for code readability
    // ---------------------------------
    const createCommentInputAndBtn = function ($curPostElem) {
        const $comment = $('<input type="text">')
        $comment.addClass("inputComment")
        $curPostElem.append($comment)

        const $button = $('<button>Comment</button>')
        $button.addClass("commentBtn")
        $button.on("click", function () {
            console.log("i'm a comment button and you clicked me")
        })

        $curPostElem.append($button)
    }

    return {
        renderPosts: renderPosts
    }
}

