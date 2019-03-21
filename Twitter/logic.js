// -----------------------
// DUMMY data..
// -----------------------
let p_id = 2
let c_id = 10
let posts = [
    {
        id: "p1",
        text: "First post!",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        id: "p2",
        text: "Aw man, I wanted to be first",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]
const logic = function () {


    const getPosts = function () {
        return posts
    }

    const addPost = function (argPost) {
        p_id += 1;
        let curPost = {
            id: "p" + p_id,
            text: argPost,
            comments: []
        }
        console.log("post to add: ")
        console.log(curPost)
        console.log(posts)
        posts.push(curPost)
    }

    const removePost = function (argPostID) {
        for (let i = 0; i < posts.length; i++)
            if (posts[i].id == argPostID) {
                //console.log("remove post  with postID : " + argPostID)
                posts.splice(i, 1)
                return true
            }
        return false
    }

    const addComment = function (argText, postID) {

        const curPost = findPostById(postID)
        c_id += 1
        console.log("c_id: " + c_id)
        const curComment = {
            id: "c" + c_id,
            text: argText
        }

        curPost.comments.push(curComment)
    }


    const removeComment = function (argPostID, argCommentID) {
        const comToRemove = findCommentByID(argPostID, argCommentID)
        console.log(comToRemove)
        const curPost = findPostById(argPostID)

        for (let i = 0; i < curPost.comments.length; i++)
            if (curPost.comments[i].id == argCommentID)
                console.log(curPost.comments.splice(i, 1))


    }
    const findCommentByID = function (argPostID, argCommentID) {
        const curPost = findPostById(argPostID)
        for (let i = 0; curPost.comments.length; i++)
            if (curPost.comments[i].id == argCommentID)
                return curPost.comments[i]
    }
    const findPostById = function (argID) {
        for (let i = 0; i < posts.length; i++)
            if (posts[i].id === argID)
                return posts[i]
    }
    const getComments = function (argPostID) {

        const curPost = findPostById(argPostID)
        console.log(curPost)
        return curPost.comments
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
        getComments: getComments
    }
}