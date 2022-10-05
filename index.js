const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// const likes = document.getElementById("likes")

// likes.addEventListener("click", function() {
//     for(let i = 0; i < likes.length; i++) {
//         likes + 1
//     }
// })

// for (let i = 0; i < post.length; i++) {
    
// }

const main = document.getElementById("main")


function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        main.innerHTML += 
                        `<div class="post">
                                <section>
                                    <div class="picture-heading">
                                        <img class="avatar artist-avatar" src=${posts[i].avatar}>
                                        <h1 class="name">${posts[i].name}<span class="location">${posts[i].location}</span></h1>
                                    </div>
                                        <img class="post" src=${posts[i].post} alt="impressionist self-portrait of van Gogh" >
                                </section>
                                    
                                <section>
                                    <div class="icons">
                                        <img class="icon" src="images/icon-heart.png" alt="outline of a heart">
                                        <img class="icon" src="images/icon-comment.png" alt="outline of a speech bubble">
                                        <img class="icon" src="images/icon-dm.png" alt="outline of a paper-plane">
                                    </div>
                                    <p class="likes">${posts[i].likes} likes</p>
                                    <h2 class="comment"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</h2>
                                </section>
                    </div>`
    }
}
 
renderPosts()

// function increaseLikes() {
//     likes.addEventListener("click", function() {
//     for(let i = 0; i < likes.length; i++) {
//         likes + 1
// }
