const baseURL='https://jsonplaceholder.typicode.com/'

const users='/users'
const posts='/posts'
const comments='comments'

const urls={
    users:{
        base: users,
        byId: (id)=>`${users}/${id}`,
        getPostsByUserId: (userId)=> `${users}/${userId}/posts`

    },
    posts:{
        base:posts,
        byId: (id)=>`${posts}/${id}`,
        getCommentsByPostId: (postId)=> `${posts}/${postId}/comments`

    },
    comments
}

export {
    baseURL,
    urls
}