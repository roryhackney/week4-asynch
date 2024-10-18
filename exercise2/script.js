document.getElementById('start-button').addEventListener('click', async function() {
    document.getElementById('output').innerHTML = "<p>Fetching user data...</p>";

    try {
        const user = await fetchUserData();
        document.getElementById('output').innerHTML += `<p>User data: ${user.name}, ${user.email}</p>`;

        // TODO: Fetch the posts for the user by calling a function named fetchPosts with user.id as an argument.
        // Store the result in a variable named posts.
        // Display the posts in the output area by updating the innerHTML to show the post titles.
        let posts = await fetchPosts(user.id);
        const output = document.getElementById("output");
        output.innerHTML += "<p>User posts: " + posts.join(", ") + "</p>";

        // TODO: Fetch the comments for the first post by calling a function named fetchComments with posts[0] as an argument.
        // Store the result in a variable named comments.
        // Display the comments in the output area by updating the innerHTML to show the comments for the first post.
        let comments = await fetchComments(posts[0]);
        output.innerHTML += "<p>Comments for first post: " + comments.join(", ") + "</p>";

        document.getElementById('output').innerHTML += `<p>All data fetched successfully!</p>`;
    } catch (error) {
        document.getElementById('output').innerHTML += `<p style="color:red;">Error: ${error}</p>`;
    }
});

async function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating a successful data fetch
            resolve({ id: 1, name: "John Doe", email: "johndoe@example.com" });
        }, 2000);
    });
}

// TODO: Create an async function named fetchPosts that takes a userId as a parameter.
// This function should return a new Promise that simulates a delay using setTimeout.
// The Promise should resolve with an array of post titles (e.g., ["Post 1", "Post 2", "Post 3"]).
async function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 2000)
    });
}

// TODO: Create an async function named fetchComments that takes a post title as a parameter.
// This function should return a new Promise that simulates a delay using setTimeout.
// The Promise should resolve with an array of comments (e.g., ["Comment 1", "Comment 2", "Comment 3"]).
async function fetchComments(postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Comment 1", "Comment 2", "Comment 3"]);
        }, 2000);
    });
}