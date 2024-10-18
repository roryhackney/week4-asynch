document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('output').innerHTML = "<p>Fetching user data...</p>";

    fetchUserData()
        .then(user => {
            document.getElementById('output').innerHTML += `<p>User data: ${user.name}, ${user.email}</p>`;
            return fetchPosts(user.id);
        })
        .then(posts => {
            // TODO: Display the posts in the output area.
            // For example, you can update the innerHTML to show the post titles.
            const output = document.getElementById("output");
            output.innerHTML += `<p>User posts: ${posts.join(", ")}`;
            // This function should simulate fetching comments for the first post and resolve with an array of comments.         
            return fetchComments(posts[0]);          
        })
        .then(comments => {
            // TODO: Display the comments in the output area.
            // For example, you can update the innerHTML to show the comments for the first post.
            output.innerHTML += `<p>Comments on first post: ${comments.join(", ")}`;
           
            document.getElementById('output').innerHTML += `<p>All data fetched successfully!</p>`;
        })
        .catch(error => {
            document.getElementById('output').innerHTML += `<p style="color:red;">Error: ${error}</p>`;
        });
});

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating a successful data fetch
            resolve({ id: 1, name: "John Doe", email: "johndoe@example.com" });
        }, 2000);
    });
}

// TODO: Create a function named fetchPosts that takes a userId as a parameter.
// This function should return a new Promise that simulates a delay using setTimeout with 2000 milliseconds.
// The Promise should resolve with an array of post titles (e.g., ["Post 1", "Post 2", "Post 3"]).
function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 2000);
    })
}

// TODO: Create a function named fetchComments that takes a post title as a parameter.
// This function should return a new Promise that simulates a delay using setTimeout with 2000 milliseconds.
// The Promise should resolve with an array of comments (e.g., ["Comment 1", "Comment 2", "Comment 3"]).
function fetchComments(postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Comment 1", "Comment 2", "Comment 3"])
        }, 2000);
    })
}